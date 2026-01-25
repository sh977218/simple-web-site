import { Component, effect, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  FormField } from '@angular/forms/signals';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MaterialModule } from '../material.module';

import { SearchFacade } from './search.facade';
import { SearchResultComponent } from './search-result.component';
import { SearchBarComponent } from './search-bar.component';

@Component({
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  imports: [
    FormsModule,
    SearchResultComponent,
    MaterialModule,
    SearchBarComponent,
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

}
