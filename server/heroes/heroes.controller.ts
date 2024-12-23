import { Controller, Get } from '@nestjs/common';
import { HeroesService } from 'server/heroes/heroes.service';

@Controller()
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get('/api/heroes')
  async getHeroes() {
    return this.heroesService.getHeroes();
  }

  @Get('/api/search/heroes')
  async searchHeroes() {
    const result = await this.heroesService.searchHeroes();
    return result;
  }
}
