import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { Member, MemberSchema } from './member.schema';

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

  @Prop({ type: [MemberSchema] })
  members: Member[];
}

export type HeroDocument = HydratedDocument<Hero>;
export const HeroSchema = SchemaFactory.createForClass(Hero);
