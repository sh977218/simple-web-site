import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { debounce, form, required } from '@angular/forms/signals';

import { environment } from '../../environments/environment';

import { SearchForm } from './search';

@Injectable({ providedIn: 'root' })
export class SearchFacade {
  private url = `${environment.api}/squads`;

  defaultSearchForm = signal<SearchForm>({
    searchTerm: '',
  });

  searchForm = form(this.defaultSearchForm, (schemaPath) => {
    debounce(schemaPath.searchTerm, 500);
    required(schemaPath.searchTerm, { message: 'searchTerm is required' });
  });

  searchedSquads = httpResource<any[]>(() => {
    const searchTerm = this.searchForm.searchTerm().value();
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

  search() {
    /* empty */
  }

  onReset() {
    this.searchForm().reset();
  }
}
