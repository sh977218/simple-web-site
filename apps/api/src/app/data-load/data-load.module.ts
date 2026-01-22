import { Module } from '@nestjs/common';

import { DataLoadService } from './data-load.service';
import { HeroesModule } from '../heroes/heroes.module';

@Module({
  imports: [HeroesModule],
  controllers: [],
  providers: [DataLoadService],
  exports: [DataLoadService],
})
export class DataLoadModule {}
