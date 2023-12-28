import { expect } from '@playwright/test';
import { test } from 'test/fixtures/baseTest';

test('Click home link', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(`AngularWithPlaywright`);
  const homeLink = page.locator(`[data-automation-id="home-link"]`);
  await homeLink.click();
  await expect(page).toHaveTitle(`Home`);
});
