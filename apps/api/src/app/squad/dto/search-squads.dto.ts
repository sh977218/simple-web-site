import { ApiProperty } from '@nestjs/swagger';

export class SearchSquadsDto {
  @ApiProperty()
  searchTerm: string;
}
