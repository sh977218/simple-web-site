import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hero } from 'src/model/hero';

@Injectable()
export class HeroesService {
  client = new Client({
    node: 'http://localhost:9200',
  });
  constructor(@InjectModel('Hero') private readonly heroModel: Model<Hero>) {}

  mongoClient() {
    const uri = 'mongodb://localhost:27017/';
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    return client;
  }

  async mongoDb() {
    const client = await this.mongoClient().connect();
    return client?.db('test');
  }

  async getHeroes() {
    const heroes = await this.heroModel.find({});
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
