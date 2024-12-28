import { expect } from '@playwright/test';
import test from 'test/fixtures/baseTest';

test('Check page title', async ({ page }) => {
  await expect(page).toHaveTitle(`SimpleWebSite`);
});

test('Check home page title', async ({ page }) => {
  await page.locator(`[data-automation-id="home-link"]`).first().click();
  await expect(page).toHaveTitle(`Home`);
});
