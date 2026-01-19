import { Hero } from '@shared/shared-models';
import { Component, effect, inject } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { MatDivider } from '@angular/material/list';
import { httpResource } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './mongodb.component.html',
  imports: [HeroComponent, MatDivider, JsonPipe, MatProgressSpinner],
})
export class MongodbComponent {
  private _snackBar = inject(MatSnackBar);

  private url = 'api/heroes';

  heroes = httpResource<Hero[]>(() => ({
    url: this.url,
  }));

  constructor() {
    effect(() => {
      if (this.heroes.error()) {
        this._snackBar.open('Could not load heroes information');
      }
    });
  }
}
