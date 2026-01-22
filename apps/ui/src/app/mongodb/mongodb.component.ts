import { HeroZod } from '@shared/shared-models';
import { Component, effect, inject, model } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { MatDivider } from '@angular/material/list';
import { httpResource } from '@angular/common/http';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';
import { MatFormField, MatInput, MatSuffix } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './mongodb.component.html',
  imports: [
    HeroComponent,
    MatDivider,
    MatProgressSpinner,
    MatFormField,
    MatInput,
    MatIconButton,
    MatIcon,
    FormsModule,
    MatSuffix
  ],
})
export class MongodbComponent {
  private _snackBar = inject(MatSnackBar);
  searchTerm = model<string>();

  private url = `${environment.api}/heroes`;

  // Super hero squad
  // Lonely City

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
