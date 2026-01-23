import { Component, effect, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput, MatSuffix } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SearchFacade } from './search.facade';
import { SearchResultComponent } from './search-result.component';

@Component({
  templateUrl: './search.component.html',
  imports: [
    MatFormField,
    MatInput,
    MatIconButton,
    MatIcon,
    FormsModule,
    MatSuffix,
    SearchResultComponent,
  ],
  providers: [SearchFacade],
})
export class SearchComponent {
  readonly facade = inject(SearchFacade);
  searchTermTemporary = model('');
  private readonly _snackBar = inject(MatSnackBar);

  constructor() {
    effect(() => {
      if (this.facade.searchedHeroes.error()) {
        this._snackBar.open('Could not load heroes information', 'Close');
      }
    });
  }

  search() {
    this.facade.searchTerm.set(this.searchTermTemporary());
  }
}
