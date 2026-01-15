import { HttpClient, httpResource } from '@angular/common/http';
import {
  Component,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeroComponent } from '../hero/hero.component';
import { HeroResponseSchema } from '../model/hero';

@Component({
  imports: [
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    HeroComponent,
  ],
  templateUrl: './elasticsearch.component.html',
})
export class ElasticsearchComponent {
  private url = 'http://localhost:3000/api/search/heroes';

  heroes = httpResource(
    () => ({
      url: this.url,
    }),
    {
      parse: HeroResponseSchema.parse,
    },
  );
}
