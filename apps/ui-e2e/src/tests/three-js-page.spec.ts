import { expect } from '@playwright/test';
import test from '../fixtures/baseTest';

test.skip('Click Three JS link', async ({ page }) => {
  await page.getByRole('link', { name: 'Three JS' }).first().click();
  await expect(page).toHaveTitle(`Three Js`);
});
