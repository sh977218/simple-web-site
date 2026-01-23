import { Injectable, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { HeroZod } from '@shared/shared-models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SearchFacade {
  searchTerm = signal<string | undefined>(undefined);
  private url = `${environment.api}/heroes`;
  searchedHeroes = httpResource<HeroZod[]>(() => {
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
