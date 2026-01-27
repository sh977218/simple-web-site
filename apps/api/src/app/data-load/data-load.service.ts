import { Injectable } from '@nestjs/common';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { SquadService } from '../squad/squad.service';

@Injectable()
export class DataLoadService {
  constructor(private readonly heroesService: SquadService) {}

  async resetAndLoadHeroes() {
    const filePath = join(__dirname, 'assets/squads.json');
    const data = readFileSync(filePath, 'utf-8');
    const heroesData = JSON.parse(data);

    await this.heroesService.deleteAllHeroes();
    await this.heroesService.injectHeroes(heroesData);
  }
}
