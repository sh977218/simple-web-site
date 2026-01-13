import { expect } from '@playwright/test';
import test from '../fixtures/baseTest';

test('Click about link', async ({ page }) => {
  await page.getByRole('link', { name: 'About' }).first().click();
  await expect(page).toHaveTitle(`About`);
});
