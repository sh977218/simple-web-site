import { Component, effect, inject, model } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormField, MatInput, MatSuffix } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SearchFacade } from './search.facade';
import { SearchResultComponent } from './search-result.component';

@Component({
  templateUrl: './mongodb.component.html',
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
export class MongodbComponent {
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
