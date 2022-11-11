import { MailService } from './mail/mail.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly mailService: MailService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async sendWelcome(lang: 'en' | 'de') {
    await this.mailService.sendWelcome(
      'onlyknoppas@gmail.com',
      'Knoppas',
      lang,
    );
  }

  async renderWelcome(lang: 'en' | 'de') {
    return await this.mailService.renderWelcome(lang);
  }
}
