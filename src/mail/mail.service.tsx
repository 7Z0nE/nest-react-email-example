import { renderToStaticMarkup } from 'react-dom/server';
import { renderEmail } from 'react-html-email';
import * as React from 'react';
import { ReactElement } from 'react';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Welcome } from './templates';
import { I18nService } from 'nestjs-i18n';
import { Footer } from './templates/common/Footer';
import { BaseProps } from './templates/common/props.interface';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private i18n: I18nService,
  ) {}

  async sendWelcome(to: string, name: string, lang: 'en' | 'de') {
    await this.mailerService.sendMail({
      to,
      subject: 'Welcome to Nice App! Confirm your Email',
      html: await this.render(Welcome.Template, {
        t: (key: string) => this.i18n.translate('mail.' + key, { lang }),
        to,
        name,
      }),
    });
  }

  async renderWelcome(lang: 'en' | 'de') {
    return await this.render(Welcome.Template, {
      t: (key: string, options?: any) =>
        this.i18n.translate('mail.' + key, { lang, ns: 'mail', ...options }),
      to: 'mail@example.com',
      name: 'Dummy Name',
    });
  }

  private async render<P extends BaseProps>(
    template: (props: P) => ReactElement,
    props: P,
  ) {
    return renderEmail(React.createElement(template, props));
  }
}
