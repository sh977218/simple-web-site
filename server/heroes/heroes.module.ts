import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HeroesController } from 'server/heroes/heroes.controller';
import { HeroesService } from 'server/heroes/heroes.service';
import { HeroSchema } from 'server/schemas/hero.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Hero', schema: HeroSchema }])],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}
