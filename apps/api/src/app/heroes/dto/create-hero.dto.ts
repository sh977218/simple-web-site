import { ApiProperty } from '@nestjs/swagger';

export class MemberDto {
  @ApiProperty()
  age: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  powers: string[];

  @ApiProperty()
  secretIdentity: string;
}

export class CreateHeroDto {
  @ApiProperty()
  homeTown: string;

  @ApiProperty()
  secretBase: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  squadName: number;

  @ApiProperty({ type: [MemberDto] })
  members: MemberDto[];
}
