import { Locator, Page } from '@playwright/test';

export class SearchPo {
  readonly searchResult: Locator;
  constructor(private readonly page: Page) {
    this.searchResult = this.page.getByRole('search');
  }
}
