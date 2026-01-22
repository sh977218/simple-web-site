import { Injectable } from '@nestjs/common';
import { HeroesService } from '../heroes/heroes.service';
import * as heroesData from '../../assets/heroes.json';

@Injectable()
export class DataLoadService {
  constructor(private readonly heroesService: HeroesService) {}

  async resetAndLoadHeroes() {
    await this.heroesService.deleteAllHeroes();
    await this.heroesService.injectHeroes(heroesData);
  }
}
