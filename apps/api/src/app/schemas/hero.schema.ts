import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { Member, MemberSchema } from './member.schema';

@Schema({ collection: 'heroes' })
export class Hero {
  @Prop({ type: String })
  homeTown: string;

  @Prop({ type: Number })
  secretBase: number;

  @Prop({ type: String })
  content: string;

  @Prop({ type: String })
  squadName: string;

  @Prop({ type: [MemberSchema] })
  members: Member[];
}

export type HeroDocument = HydratedDocument<Hero>;
export const HeroSchema = SchemaFactory.createForClass(Hero);
