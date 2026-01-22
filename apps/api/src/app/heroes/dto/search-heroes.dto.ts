import { ApiProperty } from '@nestjs/swagger';

export class SearchHeroDto {
  @ApiProperty()
  searchTerm: string;
}
