import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Member } from 'server/model/hero';

@Schema({ collection: 'heroes' })
export class Hero {
  @Prop()
  homeTown: string;

  @Prop()
  secretBase: number;

  @Prop()
  content: string;

  @Prop()
  squadName: string;

  @Prop()
  members: Member[];
}

export const HeroSchema = SchemaFactory.createForClass(Hero);
