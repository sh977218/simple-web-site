import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Squad, SquadSchema } from './schema/squad.schema';
import { SquadController } from './squad.controller';
import { SquadService } from './squad.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Squad.name, schema: SquadSchema }]),
  ],
  controllers: [SquadController],
  providers: [SquadService],
  exports: [SquadService],
})
export class SquadModule {}
