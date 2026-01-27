import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Member {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  avatar: string;

  @Prop({ type: String })
  content: string;

  @Prop({ type: Number })
  age: number;

  @Prop({ type: [String] })
  powers: string[];

  @Prop({ type: String })
  secretIdentity: string;
}

export type MemberDocument = HydratedDocument<Member>;
export const MemberSchema = SchemaFactory.createForClass(Member);
