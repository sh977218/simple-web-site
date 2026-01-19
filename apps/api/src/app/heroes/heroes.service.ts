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
    const createdHero = await new this.heroModel(createHeroDto).save();
    return createdHero;
  }

  async getHeroes() {
    return this.heroModel.find({}).exec();
  }

  async update(id: string, updateHeroDto: UpdateHeroDto): Promise<Hero> {
    return this.heroModel
      .findByIdAndUpdate({ _id: id }, updateHeroDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Hero> {
    const deletedHero = await this.heroModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedHero;
  }
}
