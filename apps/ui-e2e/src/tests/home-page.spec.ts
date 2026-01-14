import { expect } from '@playwright/test';
import test from '../fixtures/baseTest';

test('Click home link', async ({ page }) => {
  await page.locator(`[data-automation-id="home-link"]`).first().click();
  await expect(page).toHaveTitle(`Home`);
});
