import { Module } from '@nestjs/common';

import { HeroesModule } from '../heroes/heroes.module';

import { DataLoadService } from './data-load.service';

@Module({
  imports: [HeroesModule],
  controllers: [],
  providers: [DataLoadService],
  exports: [DataLoadService],
})
export class DataLoadModule {}
