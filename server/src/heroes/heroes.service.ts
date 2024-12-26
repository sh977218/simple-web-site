import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from '@elastic/elasticsearch';
import { Model } from 'mongoose';
import { Hero } from 'src/model/hero';
import { CreateHeroDto } from 'src/heroes/createHeroDto';

@Injectable()
export class HeroesService {
  client = new Client({
    node: 'http://localhost:9200',
  });

  constructor(@InjectModel('Hero') private readonly heroModel: Model<Hero>) {}

  async createHero(createHeroDto: CreateHeroDto) {
    return new this.heroModel(createHeroDto).save();
  }

  async getHeroes() {
    return this.heroModel.find({}).exec();
  }

  async searchHeroes() {
    const result = await this.client.search<Hero>({
      index: 'heroes',
      body: {
        query: {
          match: {
            homeTown: 'Metro City',
          },
        },
      },
    });
    return result.hits.hits;
  }
}
