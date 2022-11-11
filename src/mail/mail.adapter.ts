import { MailerOptions } from '@nestjs-modules/mailer';
import { TemplateAdapter } from '@nestjs-modules/mailer/dist/interfaces/template-adapter.interface';
import { createElement, ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

type MailType<P> = {
  data: { template: (props: P) => ReactElement; context: P };
} & any;

export class ReactMjmlAdapter implements TemplateAdapter {
  public compile<P>(
    mail: MailType<P>,
    callback: any,
    mailerOptions: MailerOptions,
  ): void {
    mail.data.context = mail.data.to;
    const rendered = this.render(mail.data.template, mail.data.context);
    mail.data.html = rendered;
    callback();
  }

  private async render<P>(template: (props: P) => ReactElement, props: P) {
    return renderToStaticMarkup(createElement(template, props));
  }
}
