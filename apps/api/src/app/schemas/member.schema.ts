import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Member {
  @Prop()
  age: string;

  @Prop()
  name: number;

  @Prop()
  powers: string[];

  @Prop()
  secretIdentity: string;
}

export type MemberDocument = HydratedDocument<Member>;
export const MemberSchema = SchemaFactory.createForClass(Member);
