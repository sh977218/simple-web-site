import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { HeroesService } from './heroes.service';
import { CreateHeroDto } from './dto/createHeroDto';
import { UpdateHeroDto } from './dto/update-cat.dto';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

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
