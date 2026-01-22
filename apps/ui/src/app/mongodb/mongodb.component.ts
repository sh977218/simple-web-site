import { Hero } from '@shared/shared-models';
import { Component, effect, inject, model } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { MatDivider } from '@angular/material/list';
import { httpResource } from '@angular/common/http';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';
import { MatFormField, MatHint, MatInput, MatLabel, MatSuffix } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  templateUrl: './mongodb.component.html',
  imports: [
    HeroComponent,
    MatDivider,
    MatProgressSpinner,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatIcon,
    MatIconButton,
    FormsModule,
    MatHint,
    MatLabel,
    MatSuffix,
  ],
})
export class MongodbComponent {
  private _snackBar = inject(MatSnackBar);

  private url = `${environment.api}/heroes`;

  // Super hero squad
  // Lonely City
  searchTerm = model('Super hero squad');

  heroes = httpResource<Hero[]>(() => ({
    url: this.url,
    method: 'POST',
    body: { searchTerm: this.searchTerm() },
  }));

  constructor() {
    effect(() => {
      if (this.heroes.error()) {
        this._snackBar.open('Could not load heroes information', 'Close');
      }
    });
  }
}
