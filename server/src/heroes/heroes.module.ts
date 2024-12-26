import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HeroesController } from 'src/heroes/heroes.controller';
import { HeroesService } from 'src/heroes/heroes.service';
import { HeroSchema } from 'src/schemas/hero.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Hero', schema: HeroSchema }])],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}
