import { Component, inject } from '@angular/core';
import { FormField } from '@angular/forms/signals';

import { MaterialModule } from '../material.module';

import { SearchFacade } from './search.facade';

@Component({
  selector: 'app-search-bar',
  template: `
    <mat-form-field appearance="fill" class="w-full mb-3">
      <mat-label>Search heroes...</mat-label>
      <input
        [formField]="facade.searchForm.searchTerm"
        matInput
        type="search"
        placeholder="Ex. legendary"
      />
      @if (facade.searchForm.searchTerm().value().length) {
        <div matSuffix>
          <button type="submit" aria-label="Search" matIconButton>
            <mat-icon fontIcon="search"></mat-icon>
          </button>
          <button type="reset" aria-label="Reset" matIconButton>
            <mat-icon fontIcon="clear"></mat-icon>
          </button>
        </div>
      }
      @for (error of facade.searchForm.searchTerm().errors(); track error) {
        <mat-error>{{ error.message }}</mat-error>
      }
    </mat-form-field>
  `,
  imports: [MaterialModule, FormField],
  providers: [SearchFacade]
})
export class SearchBarComponent {
  readonly facade = inject(SearchFacade);
}
