import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hero } from './schemas/hero.schema';
import { CreateHeroDto } from './dto/createHeroDto';
import { UpdateHeroDto } from './dto/update-cat.dto';

@Injectable()
export class HeroesService {
  constructor(
    @InjectModel(Hero.name) private readonly heroModel: Model<Hero>,
  ) {}

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
}
