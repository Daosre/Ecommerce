// Importation des modules nécessaires de NestJS et des autres bibliothèques.
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { sub: string; email: string }) {
    const user =  this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
      select:{
      id:true,
      email:true,
      role: true
      }
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user
  }
}

