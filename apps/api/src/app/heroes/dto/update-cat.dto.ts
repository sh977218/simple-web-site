import { ApiProperty } from '@nestjs/swagger';
import { MemberDto } from './createHeroDto';

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
