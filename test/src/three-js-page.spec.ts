import { expect } from '@playwright/test';
import test from 'test/fixtures/baseTest';

test('Click Three JS link', async ({ page }) => {
  await page.getByRole('link', { name: 'Three JS' }).first().click();
  await expect(page).toHaveTitle(`Three Js`);
});
