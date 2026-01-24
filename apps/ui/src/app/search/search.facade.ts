import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { Hero } from '@shared/shared-models';

import { environment } from '../../environments/environment';

import { SearchForm } from './search';

@Injectable({ providedIn: 'root' })
export class SearchFacade {
  searchTerm = signal<string | undefined>(undefined);
  private url = `${environment.api}/heroes`;

  defaultSearchForm = signal<SearchForm>({
    searchTerm: '',
  });

  searchForm = form(this.defaultSearchForm, (schemaPath) => {
    required(schemaPath.searchTerm, { message: 'searchTerm is required' });
  });

  searchedHeroes = httpResource<Hero[]>(() => {
    const searchTerm = this.searchTerm();
    if (searchTerm) {
      return {
        url: this.url,
        method: 'POST',
        body: { searchTerm },
      };
    }
    return {
      url: this.url,
    };
  });
}
