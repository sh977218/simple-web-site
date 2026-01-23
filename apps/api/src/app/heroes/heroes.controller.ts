import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { CreateHeroDto } from './dto/create-hero.dto';
import { SearchHeroDto } from './dto/search-heroes.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Post()
  search(@Body() searchHeroDto: SearchHeroDto) {
    return this.heroesService.search(searchHeroDto);
  }

  @Post(':id')
  create(@Body() createHeroDto: CreateHeroDto) {
    return this.heroesService.createHero(createHeroDto);
  }

  @Get()
  async findAll() {
    return await this.heroesService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The heroes have been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'The hero is not found.' })
  findOne(@Param('id') id: string) {
    return this.heroesService.findOne(id);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateHeroDto: UpdateHeroDto) {
    return this.heroesService.update(id, updateHeroDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.heroesService.delete(id);
  }
}
