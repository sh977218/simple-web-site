import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/api/information')
  appInformation() {
    return {
      message: '/api/information testing',
    };
  }
}
