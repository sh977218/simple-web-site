import { expect } from '@playwright/test';

import test from '../fixtures/baseTest';

test('Search', async ({ page }) => {
  await page.getByRole('link', { name: 'Search' }).click();
  await expect(page).toHaveTitle(`Search`);
  await expect(page.getByRole('search')).toBeVisible();
});
