import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
// import { Client } from '@elastic/elasticsearch';

type Hero = {
  homeTown: string;
  secretBase: string;
  content: string;
  squadName: number;
  members: {
    age: number;
    name: string;
    powers: string[];
    secretIdentity: string;
  }[];
};

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
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  private http = inject(HttpClient);
  //  client = new Client({ node: 'https://localhost:9200' });

  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  typeOfSeasons: string[] = ['Spring', 'Summer', 'Fall', 'Winter'];

  heroes$ = this.http
    .get('https://localhost:9200/heroes/_search', { responseType: 'text' })
    .pipe(
      catchError(() => []),
      map((response: string) => {
        const res = JSON.parse(response) as {
          hits: { hits: { _source: Hero }[] };
        };
        return res.hits.hits.map((h) => h._source);
      })
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
}
