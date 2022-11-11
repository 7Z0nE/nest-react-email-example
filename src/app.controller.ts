import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('welcome/de')
  sendWelcomeDE() {
    return this.appService.sendWelcome('de');
  }

  @Get('welcome/en')
  sendWelcomeEN() {
    return this.appService.sendWelcome('en');
  }

  @Get('welcome/de/show')
  showWelcomeDE() {
    return this.appService.renderWelcome('de');
  }

  @Get('welcome/en/show')
  showWelcomeEN() {
    return this.appService.renderWelcome('en');
  }
}
