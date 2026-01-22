import { Module } from '@nestjs/common';

import { DataLoadService } from './data-load.service';

@Module({
  imports: [],
  controllers: [],
  providers: [DataLoadService],
})
export class DataLoadModule {}
