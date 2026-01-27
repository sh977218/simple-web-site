import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { CreateSquadDto } from './dto/create-squad.dto';
import { SearchSquadsDto } from './dto/search-squads.dto';
import { UpdateSquadDto } from './dto/update-squad.dto';
import { SquadService } from './squad.service';

@Controller('squad')
export class SquadController {
  constructor(private readonly squadService: SquadService) {}

  @Post()
  search(@Body() searchSquadDto: SearchSquadsDto) {
    return this.squadService.search(searchSquadDto);
  }

  @Post(':id')
  create(@Body() createSquadDto: CreateSquadDto) {
    return this.squadService.createSquad(createSquadDto);
  }

  @Get()
  async findAll() {
    return await this.squadService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The squad have been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'The hero is not found.' })
  findOne(@Param('id') id: string) {
    return this.squadService.findOne(id);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateSquadDto: UpdateSquadDto) {
    return this.squadService.update(id, updateSquadDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.squadService.delete(id);
  }
}
