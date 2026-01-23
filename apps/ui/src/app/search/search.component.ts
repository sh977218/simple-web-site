import { Component, effect, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, required } from '@angular/forms/signals';
import {
  MatError,
  MatFormField,
  MatInput,
  MatLabel,
} from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SearchForm } from './search';
import { SearchFacade } from './search.facade';
import { SearchResultComponent } from './search-result.component';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    SearchResultComponent,
    FormField,
    MatError,
    MatLabel,
    MatIcon,
    MatIconButton,
  ],
  providers: [SearchFacade],
})
export class SearchComponent {
  readonly facade = inject(SearchFacade);
  searchTermTemporary = model('');
  private readonly _snackBar = inject(MatSnackBar);

  defaultSearchForm = signal<SearchForm>({
    searchTerm: '',
  });

  searchForm = form(this.defaultSearchForm, (schemaPath) => {
    required(schemaPath.searchTerm, { message: 'searchTerm is required' });
  });

  constructor() {
    effect(() => {
      if (this.facade.searchedHeroes.error()) {
        this._snackBar.open('Could not load heroes information', 'Close');
      }
    });
  }

  search() {
    this.facade.searchTerm.set(this.searchForm.searchTerm().value());
  }
}
