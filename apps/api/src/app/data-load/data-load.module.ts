import { Module } from '@nestjs/common';

import { SquadModule } from '../squad/squad.module';

import { DataLoadService } from './data-load.service';

@Module({
  imports: [SquadModule],
  controllers: [],
  providers: [DataLoadService],
  exports: [DataLoadService],
})
export class DataLoadModule {}
