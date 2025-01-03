import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/api/information')
  appInformation() {
    return '/api/information testing';
  }
}
