import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from '@elastic/elasticsearch';
import { Model } from 'mongoose';
import { Hero } from 'src/model/hero';

@Injectable()
export class HeroesService {
  client = new Client({
    node: 'http://localhost:9200',
  });
  constructor(@InjectModel('Hero') private readonly heroModel: Model<Hero>) {}

  async getHeroes() {
    const heroes = await this.heroModel.find({}).exec();
    return heroes;
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
