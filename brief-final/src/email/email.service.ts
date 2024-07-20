import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;
  constructor(private readonly config: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.config.get('SMTP_HOST'),
      port: Number(this.config.get('SMTP_PORT')),
      secure: process.env.MAILER_SECURE === 'false',
      auth: {
        user: this.config.get('SMTP_EMAIL'),
        pass: this.config.get('SMTP_PASSWORD'),
      },
    });
  }

  async sendUserConfirmation(user: User, token: string) {
    const url = `${this.config.get('SERVER_URL')}/activate/${token}`;
    const emailHtml = `<p>Hey ${user.name},</p>
        <p>Bienvenue dans la Cochonade 👍</p>
        <p>Veuillez  <a href='${url}'>cliquer ici</a> pour valider votre compte</p>
        <p>Si vous êtes pas l'autheur de cet création veuillez ignorer cet e-mail</p>
        <img src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29jaG9ufGVufDB8fDB8fHww"/>`;

    await this.transporter.sendMail({
      from: this.config.get('SMTP_EMAIL'),
      to: user.email,
      subject: `Bienvenue ${user.name} Confirmation de l'email`,
      html: emailHtml,
    });
  }
}
