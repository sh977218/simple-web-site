import { expect } from '@playwright/test';

import test from '../fixtures/baseTest';

test('MongoDB', async ({ page }) => {
  await page.getByRole('link', { name: 'Mongodb' }).click();
  await expect(page).toHaveTitle(`Mongo DB`);
  await expect(page.getByRole('search')).toBeVisible();
});
