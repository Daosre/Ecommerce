import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto, SignUpDto } from './dto';
import * as argon from 'argon2';
import { role } from 'src/utils/const';
import { EmailService } from 'src/email/email.service';
import { userInfo } from 'os';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService,private jwt: JwtService,private config: ConfigService, private emaailService: EmailService) {}
  //Générateur de token
  async signToken(userId: string): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
    };

    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '30d',
      secret: secret,
    });
    return {
      access_token: token,
    };
  }

  //Inscription d'un User
  async SignUp(dto: SignUpDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    });
    if (existingUser) {
      throw new ForbiddenException('Email Already taken')
    }
    //Faire une const qui permet de vérifié le role.
    const Role = await this.prisma.role.findUnique({
      where: {
        name: role.USER
      }
    })
    const hash = await argon.hash(dto.password)
    const activationToken = await argon.hash(`${new Date()} + ${dto.email}`);
    const newToken = activationToken.replaceAll('/', '')
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        token: newToken,
        password: hash,
        name: dto.name,
        //A la création le role serras défini ici en tant que User. Car nous avons mis plus haut dans la const find role.User
        Role: Role.id
      }
    })

    await this.emaailService.sendUserConfirmation(user, newToken)
    await this.prisma.panier.create({
      data: {
        userId: user.id
      }
    })
     return {message: "🖕 success 🖕"}
  }

  //Connection d'un User
  async SignIn(dto: SignInDto) {
    const User = await this.prisma.user.findFirst({
      where: {
        AND: [
          {
            email: dto.email
          },
          { isActive: true }
        ],
      },
      select: {
        id: true,
        password: true,
        Role: true
      }
    });
    if (!User) {
      throw new ForbiddenException('Invalid Credentials')
    }
    const IsValidPassword = await argon.verify(User.password, dto.password)
    if (!IsValidPassword) {
      throw new ForbiddenException('Invalid Password') 
      
    }
    return {
      role: User.Role,
      tok: await this.signToken(User.id)
    }
  }

  //Delete d'un User / Avec Panier
  async DeleteUser(id: string) {
    
    const existingUser = await this.prisma.user.findUnique({
        where: {
            id: id
      },
      select: {
        id: true,
        panier: true
      }
    })
    if (!existingUser || !existingUser.id) {
        throw new ForbiddenException('Unexisting Id')
    }
    if (existingUser.panier) {
      await this.prisma.panier.delete({
      where: {
        id: existingUser.panier.id
      }
    })
    }
     await this.prisma.user.delete({
      where: {
         id: id
       }
       
     })
     return {message: "Supprimer avec succes"}
  }
  
  //Rédupération de tout les Users
  async getAllUser() {
    const user = await this.prisma.user.findMany({
        orderBy: {
            name: 'asc'
      }
    })
    user.map((element) => {
      delete element.password
    })
    return user
  }
}