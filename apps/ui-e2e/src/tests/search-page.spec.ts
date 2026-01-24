import { expect } from '@playwright/test';

import { test } from '../fixtures/search.fixture';

test('Search', async ({ searchPage }) => {
  await expect(searchPage.searchResult).toBeVisible();
});
