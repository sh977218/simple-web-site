import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Member {
  @Prop({ type: Number })
  name: number;

  @Prop({ type: String })
  age: string;

  @Prop({ type: [String] })
  powers: string[];

  @Prop({ type: String })
  secretIdentity: string;
}

export type MemberDocument = HydratedDocument<Member>;
export const MemberSchema = SchemaFactory.createForClass(Member);
