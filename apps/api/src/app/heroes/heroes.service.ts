import { Client } from '@elastic/elasticsearch';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { HeroType } from '@shared/shared-models';

import { CreateHeroDto } from './createHeroDto';

@Injectable()
export class HeroesService {
  client = new Client({
    node: 'http://localhost:9200',
  });

  constructor(@InjectModel('Hero') private readonly heroModel: Model<HeroType>) {}

  async createHero(createHeroDto: CreateHeroDto) {
    return new this.heroModel(createHeroDto).save();
  }

  async getHeroes() {
    return this.heroModel.find({}).exec();
  }

  async searchHeroes() {
    const result = await this.client.search<HeroType>({
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
