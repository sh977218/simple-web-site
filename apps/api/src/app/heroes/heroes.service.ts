import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateHeroDto } from './dto/create-hero.dto';
import { SearchHeroDto } from './dto/search-heroes.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero } from './schema/hero.schema';

@Injectable()
export class HeroesService {
  constructor(
    @InjectModel(Hero.name) private readonly heroModel: Model<Hero>,
  ) {}

  async search(searchHeroDto: SearchHeroDto) {
    return await this.heroModel
      .find({ $text: { $search: searchHeroDto.searchTerm } })
      .lean()
      .exec();
  }

  async createHero(createHeroDto: CreateHeroDto) {
    return await new this.heroModel(createHeroDto).save();
  }

  async findAll() {
    return await this.heroModel.find().lean().exec();
  }

  async findOne(id: string) {
    return this.heroModel.find({ _id: id }).exec();
  }

  async update(id: string, updateHeroDto: UpdateHeroDto): Promise<Hero> {
    return this.heroModel
      .findByIdAndUpdate({ _id: id }, updateHeroDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Hero> {
    return await this.heroModel.findByIdAndDelete({ _id: id }).exec();
  }

  deleteAllHeroes() {
    return this.heroModel.deleteMany({});
  }
  injectHeroes(data: CreateHeroDto[]) {
    return this.heroModel.insertMany(data);
  }
}
