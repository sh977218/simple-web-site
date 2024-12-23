import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from 'config/configuration';
import { ConfigModule } from '@nestjs/config';
import { HeroesModule } from 'src/heroes/heroes.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   load: [configuration],
    // }),
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'test' }),
    HeroesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
