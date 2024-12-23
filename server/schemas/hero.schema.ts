import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Member } from 'model/hero';

export type HeroDocument = HydratedDocument<Hero>;

@Schema()
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
