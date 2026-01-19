import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/healthz')
  appInformation() {
    return { status: 'ok' };
  }
}
