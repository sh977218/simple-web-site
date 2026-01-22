import { Component, effect, inject, model } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { MatDivider } from '@angular/material/list';
import { httpResource } from '@angular/common/http';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';
import { MatFormField, MatInput, MatSuffix } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { HeroZod } from '@shared/shared-models';

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
    MatSuffix,
  ],
})
export class MongodbComponent {
  private _snackBar = inject(MatSnackBar);

  private url = `${environment.api}/heroes`;

  // Super hero squad
  // Lonely City
  searchTerm = model('Super hero squad');

  heroes = httpResource<HeroZod[]>(() => ({
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
