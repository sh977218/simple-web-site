import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Hero, HeroSchema } from './schema/hero.schema';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }]),
  ],
  controllers: [HeroesController],
  providers: [HeroesService],
  exports: [HeroesService],
})
export class HeroesModule {}
