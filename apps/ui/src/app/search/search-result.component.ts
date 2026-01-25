import { HttpResourceRef } from '@angular/common/http';
import { Component, input } from '@angular/core';
import { Hero } from '@shared/shared-models';

import { HeroComponent } from '../hero/hero.component';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-search-result',
  template: `
    <h1>Search Result From Mongo DB:</h1>
    <fieldset>
      @if (heroes().hasValue()) {
        @for (hero of heroes().value(); track hero) {
          <div role="list">
            <app-hero [hero]="hero" role="listitem" />
          </div>
        } @empty {
          <p aria-live="polite">No heroes found.</p>
        }
      } @else if (heroes().isLoading()) {
        <div class="spinner-overlay">
          <mat-spinner></mat-spinner>
        </div>
      }
    </fieldset>
  `,
  imports: [HeroComponent, MaterialModule],
  host: {
    role: 'search',
    class: 'inline-flex flex-col',
  },
})
export class SearchResultComponent {
  heroes = input.required<HttpResourceRef<Hero[] | undefined>>();
}
