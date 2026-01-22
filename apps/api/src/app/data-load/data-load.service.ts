import { Injectable } from '@nestjs/common';
import { HeroesService } from '../heroes/heroes.service';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

@Injectable()
export class DataLoadService {
  constructor(private readonly heroesService: HeroesService) {}

  async resetAndLoadHeroes() {
    const filePath = join(__dirname, 'assets/heroes.json');
    const data = readFileSync(filePath, 'utf-8');
    const heroesData = JSON.parse(data);

    await this.heroesService.deleteAllHeroes();
    await this.heroesService.injectHeroes(heroesData);
  }
}
