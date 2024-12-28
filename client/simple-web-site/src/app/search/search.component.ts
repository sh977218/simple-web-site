import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { catchError, map } from 'rxjs';

import { HeroComponent } from 'app/hero/hero.component';
import { Hero, HeroResponseSchema } from 'app/model/hero';
import { verifyResponse } from 'app/verifyResponse';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    MatCardModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    HeroComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  private http = inject(HttpClient);

  typeOfSeasons: string[] = ['Spring', 'Summer', 'Fall', 'Winter'];

  heroesFromES$ = this.http
    .get<{ _source: Hero }[]>('http://localhost:3000/api/search/heroes')
    .pipe(
      catchError(() => []),
      map((res) => res.map((h) => h._source)),
    );

  heroesFromMongo$ = this.http
    .get<Hero[]>('http://localhost:3000/api/heroes/100')
    .pipe(
      verifyResponse(HeroResponseSchema),
      catchError(() => []),
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
