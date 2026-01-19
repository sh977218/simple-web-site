import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { HeroesService } from './heroes.service';
import { CreateHeroDto } from './dto/createHeroDto';
import { UpdateHeroDto } from './dto/update-cat.dto';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The heroes have been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'The hero is not found.' })
  getHeroes(@Param('id') id: string) {
    console.log(`path parameter id: ${id}`);
    return this.heroesService.getHeroes();
  }

  @Post(':id')
  async update(@Param('id') id: string, @Body() updateHeroDto: UpdateHeroDto) {
    return this.heroesService.update(id, updateHeroDto);
  }

  @Post(':id')
  async create(@Body() createHeroDto: CreateHeroDto) {
    const result = await this.heroesService.createHero(createHeroDto);
    return result;
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.heroesService.delete(id);
  }
}
