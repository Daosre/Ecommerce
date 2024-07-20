import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt-strategy';
import { EmailService } from 'src/email/email.service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController ],
  providers: [AuthService, PrismaService, JwtService, JwtStrategy, EmailService],
})
export class AuthModule {}
