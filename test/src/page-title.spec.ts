import { expect } from '@playwright/test';
import test from 'test/fixtures/baseTest';

test('Check page title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(`AngularWithPlaywright`);
});

test('Check home page title', async ({ page }) => {
  await page.goto('/');
  await page.locator(`[data-automation-id="home-link"]`).click();
  await expect(page).toHaveTitle(`Home`);
});
