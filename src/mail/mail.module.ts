import { MailerModule } from '@nestjs-modules/mailer';
import { MjmlAdapter } from '@nestjs-modules/mailer/dist/adapters/mjml.adapter';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
console.log(process.env.MAIL_URL);
console.log(process.env.MAIL_PORT);
@Module({
  imports: [
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        host: process.env.MAIL_URL,
        port: Number(process.env.MAIL_PORT),
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
