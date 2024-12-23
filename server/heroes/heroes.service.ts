import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { Hero } from 'client/simple-web-site/src/app/model/hero';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class HeroesService {
  client = new Client({
    node: 'http://localhost:9200',
  });
  constructor(@InjectConnection() private connection: Connection) {}
  async startTransaction() {
    const session = await this.connection.startSession();
    session.startTransaction();
    // Your transaction logic here
  }
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
    const HeroesCollection = (await this.mongoDb())?.collection('heroes');
    const heroes = await HeroesCollection?.find({}).toArray();
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
