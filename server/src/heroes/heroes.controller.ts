import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HeroesService } from 'src/heroes/heroes.service';
import { ApiResponse } from '@nestjs/swagger';
import { CreateHeroDto } from 'src/heroes/createHeroDto';

@Controller()
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get('/api/heroes/:id')
  @ApiResponse({
    status: 200,
    description: 'The heroes have been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'The hero is not found.' })
  getHeroes(@Param('id') id: string) {
    console.log(`path parameter id: ${id}`);
    return this.heroesService.getHeroes();
  }

  @Get('/api/search/heroes')
  async searchHeroes() {
    const result = await this.heroesService.searchHeroes();
    return result;
  }

  @Post('/api/hero')
  async create(@Body() createHeroDto: CreateHeroDto) {
    const result = await this.heroesService.createHero(createHeroDto);
    return result;
  }
}
