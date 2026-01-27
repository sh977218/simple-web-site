import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateSquadDto } from './dto/create-squad.dto';
import { SearchSquadsDto } from './dto/search-squads.dto';
import { UpdateSquadDto } from './dto/update-squad.dto';
import { Squad } from './schema/squad.schema';

@Injectable()
export class SquadService {
  constructor(
    @InjectModel(Squad.name) private readonly squadModel: Model<Squad>,
  ) {}

  async search(searchSquadsDto: SearchSquadsDto) {
    return await this.squadModel
      .find({ $text: { $search: searchSquadsDto.searchTerm } })
      .lean()
      .exec();
  }

  async createSquad(createSquadDto: CreateSquadDto) {
    return await new this.squadModel(createSquadDto).save();
  }

  async findAll() {
    return await this.squadModel.find().lean().exec();
  }

  async findOne(id: string) {
    return this.squadModel.find({ _id: id }).exec();
  }

  async update(id: string, updateSquadDto: UpdateSquadDto): Promise<Squad> {
    return this.squadModel
      .findByIdAndUpdate({ _id: id }, updateSquadDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Squad> {
    return await this.squadModel.findByIdAndDelete({ _id: id }).exec();
  }

  deleteAllSquads() {
    return this.squadModel.deleteMany({});
  }
  injectSquads(data: CreateSquadDto[]) {
    return this.squadModel.insertMany(data);
  }
}
