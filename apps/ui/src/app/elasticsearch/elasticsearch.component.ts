import { httpResource } from '@angular/common/http';
import { Component, effect, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeroesResponseSchema } from '@shared/shared-models';

import { environment } from '../../environments/environment';
import { HeroComponent } from '../hero/hero.component';

@Component({
  imports: [
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    HeroComponent,
    MatProgressSpinner,
  ],
  templateUrl: './elasticsearch.component.html',
  host: {
    class: 'flex h-full w-full flex-col',
  },
})
export class ElasticsearchComponent {
  private _snackBar = inject(MatSnackBar);

  private url = `${environment.api}/heroes`;

  heroes = httpResource(
    () => ({
      url: this.url,
    }),
    {
      parse: HeroesResponseSchema.parse,
    },
  );

  constructor() {
    effect(() => {
      if (this.heroes.error()) {
        this._snackBar.open('Could not load heroes information', 'Close');
      }
    });
  }
}
