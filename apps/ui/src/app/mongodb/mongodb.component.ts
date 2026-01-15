import { HeroResponseSchema } from '../model/hero';
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { MatDivider } from '@angular/material/list';
import { httpResource } from '@angular/common/http';

@Component({
  templateUrl: './mongodb.component.html',
  imports: [HeroComponent, MatDivider],
})
export class MongodbComponent {
  private url = 'http://localhost:3000/api/heroes/100';

  heroes = httpResource(
    () => ({
      url: this.url,
    }),
    {
      parse: HeroResponseSchema.parse,
    },
  );
}
