import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesController } from 'src/heroes/heroes.controller';
import { HeroesService } from 'src/heroes/heroes.service';

@Module({
  imports: [],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}
