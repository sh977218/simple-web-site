import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesController } from 'src/heroes/heroes.controller';

@Module({
  imports: [MongooseModule.forFeature()],
  controllers: [HeroesController],
  providers: [],
})
export class HeroesModule {}
