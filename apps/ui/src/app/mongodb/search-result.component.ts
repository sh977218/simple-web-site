import { HttpResourceRef } from '@angular/common/http';
import { Component, input } from '@angular/core';
import { MatDivider } from '@angular/material/list';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { HeroZod } from '@shared/shared-models';

import { HeroComponent } from '../hero/hero.component';

import { SearchFacade } from './search.facade';

@Component({
  selector: 'app-search-result',
  template: `
    <fieldset>
      @if (heroes().hasValue()) {
        @for (hero of heroes().value(); track hero) {
          <section class="flex flex-col flex-wrap justify-between">
            <app-hero [hero]="hero" class="my-2" />
            <mat-divider />
          </section>
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
  imports: [HeroComponent, MatDivider, MatProgressSpinner],
  providers: [SearchFacade],
})
export class SearchResultComponent {
  heroes = input.required<HttpResourceRef<HeroZod[] | undefined>>();
}
