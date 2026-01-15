import { Hero, HeroResponseSchema } from '../model/hero';
import { verifyResponse } from '../verifyResponse';
import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { MatDivider } from '@angular/material/list';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './mongodb.component.html',
  imports: [AsyncPipe, HeroComponent, MatDivider],
})
export class MongodbComponent {
  private http = inject(HttpClient);

  heroesFromMongo$ = this.http
    .get<Hero[]>('http://localhost:3000/api/heroes/100')
    .pipe(
      verifyResponse(HeroResponseSchema),
      catchError(() => []),
    );
}
