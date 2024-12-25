import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

import { HeroesModule } from 'src/heroes/heroes.module';
import configuration from 'src/config/configuration';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   load: [configuration],
    // }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '.', 'client/browser'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'test' }),
    HeroesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
