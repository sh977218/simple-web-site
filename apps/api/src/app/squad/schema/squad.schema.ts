import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { Member, MemberSchema } from './member.schema';

@Schema({ collection: 'squads' })
export class Squad {
  @Prop({ type: String })
  squadName: string;

  @Prop({ type: String })
  avatar: string;

  @Prop({ type: String })
  content: string;

  @Prop({ type: String })
  homeTown: string;

  @Prop({ type: String })
  secretBase: string;

  @Prop({ type: [MemberSchema] })
  members: Member[];
}

export type HeroDocument = HydratedDocument<Squad>;
export const SquadSchema = SchemaFactory.createForClass(Squad);
SquadSchema.index({
  squadName: 'text',
  content: 'text',
  homeTown: 'text',
  secretBase: 'text',
});
