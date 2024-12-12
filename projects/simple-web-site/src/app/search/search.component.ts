import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { Hero } from '../model/hero';
import { HeroComponent } from '../hero/hero.component';

// import { Client } from '@elastic/elasticsearch';

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
  //  client = new Client({ node: 'http://localhost:9200' });

  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  typeOfSeasons: string[] = ['Spring', 'Summer', 'Fall', 'Winter'];

  heroesFromES$ = this.http
    .get('http://localhost:9200/es/heroes/_doc/1', { responseType: 'text' })
    .pipe(
      catchError(() => []),
      map((response: string) => {
        const res = JSON.parse(response) as {
          hits: { hits: { _source: Hero }[] };
        };
        return res.hits.hits.map((h) => h._source);
      })
    );

  heroesFromMongo$ = this.http
    .get<Hero[]>('http://localhost:3000/api/heroes')
    .pipe(catchError(() => []));

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
    this.http.get('http://localhost:3000/api/information').subscribe();
  }
}
