import { ApiProperty } from '@nestjs/swagger';

import { MemberDto } from './create-hero.dto';

export class UpdateHeroDto {
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
