import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { catchError, map } from 'rxjs';

import { HeroComponent } from '../hero/hero.component';
import { Hero } from '../model/hero';

@Component({
  imports: [
    AsyncPipe,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    HeroComponent,
    AsyncPipe
],
  templateUrl: './elasticsearch.component.html'
})
export class ElasticsearchComponent {
  private http = inject(HttpClient);

  heroesFromES$ = this.http
    .get<{ _source: Hero }[]>('http://localhost:3000/api/search/heroes')
    .pipe(
      catchError(() => []),
      map((res) => res.map((h) => h._source)),
    );


  /*
    cards$ = defer(() => from((this.client.search<Hero>({
        index: 'heroes'
      })).then((response) => {
        return response.hits.hits.map(h => h._source);
      }))
    ).pipe(catchError(() => []),
      map((res: any) => {
        return res.hits.hits._source as Hero[];
      }));*/
  constructor() {
    this.http
      .get('http://localhost:3000/api/information', { responseType: 'text' })
      .subscribe();
  }
}
