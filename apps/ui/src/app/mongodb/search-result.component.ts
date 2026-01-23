import { HttpResourceRef } from '@angular/common/http';
import { Component, input } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Hero } from '@shared/shared-models';

import { HeroComponent } from '../hero/hero.component';

import { SearchFacade } from './search.facade';

@Component({
  selector: 'app-search-result',
  template: `
    <h1>Search Result From Mongo DB:</h1>
    <fieldset>
      @if (heroes().hasValue()) {
        @for (hero of heroes().value(); track hero) {
          <app-hero [hero]="hero" />
        } @empty {
          <p>No searchedHeroes found.</p>
        }
      } @else if (heroes().isLoading()) {
        <div class="spinner-overlay">
          <mat-spinner></mat-spinner>
        </div>
      }
    </fieldset>
  `,
  imports: [HeroComponent, MatProgressSpinner],
  providers: [SearchFacade],
  host: {
    role: 'search',
  },
})
export class SearchResultComponent {
  heroes = input.required<HttpResourceRef<Hero[]>>();
}
