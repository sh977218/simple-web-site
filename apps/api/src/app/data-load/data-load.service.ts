import { Injectable } from '@nestjs/common';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { SquadService } from '../squad/squad.service';

@Injectable()
export class DataLoadService {
  constructor(private readonly squadsService: SquadService) {}

  async resetAndLoadHeroes() {
    const filePath = join(__dirname, 'assets/squads.json');
    const data = readFileSync(filePath, 'utf-8');
    const squadsData = JSON.parse(data);

    await this.squadsService.deleteAllSquads();
    await this.squadsService.injectSquads(squadsData);
  }
}
