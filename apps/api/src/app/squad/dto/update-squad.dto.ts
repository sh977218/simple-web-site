import { ApiProperty } from '@nestjs/swagger';

import { MemberDto } from './create-squad.dto';

export class UpdateSquadDto {
  @ApiProperty()
  readonly homeTown?: string;
  @ApiProperty()
  readonly squadName?: number;
  @ApiProperty()
  readonly secretBase?: string;
  @ApiProperty()
  readonly content?: string;

  @ApiProperty({ type: [MemberDto] })
  members: MemberDto[];
}
