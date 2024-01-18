import { expect } from '@playwright/test';
import test from 'test/fixtures/baseTest';

test('Check page title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(`AngularWithPlaywright`);
  const homeLink = page.locator(`[data-automation-id="home-link"]`);
  await homeLink.click();
  await expect(page).toHaveTitle(`Home`);
  await page.locator(`[data-automation-id="helps-link"]`).click();
  await page.locator(`[data-automation-id="about-link"]`).click();
  await expect(page).toHaveTitle(`About`);
});
