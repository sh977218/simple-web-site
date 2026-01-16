import { expect } from '@playwright/test';
import test from '../fixtures/baseTest';

test('Three JS', async ({ page }) => {
  await page.getByRole('link', { name: 'Three JS' }).first().click();
  await expect(page).toHaveTitle(`Three Js`);
});
