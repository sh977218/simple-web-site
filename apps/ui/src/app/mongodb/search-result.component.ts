import { Component, input } from '@angular/core';
import { SearchFacade } from './search.facade';
import { HeroComponent } from '../hero/hero.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { HttpResourceRef } from '@angular/common/http';
import { Hero } from '@shared/shared-models';

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
})
export class SearchResultComponent {
  heroes = input.required<HttpResourceRef<Hero[]>>();
}
