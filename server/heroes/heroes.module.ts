import { Module } from '@nestjs/common';
import { HeroesController } from 'server/heroes/heroes.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature()],
  controllers: [HeroesController],
  providers: [],
})
export class HeroesModule {}
