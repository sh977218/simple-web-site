import { expect } from '@playwright/test';
import test from 'test/fixtures/baseTest';

test('Check page title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(`AngularWithPlaywright`);
  const homeLink = page.locator(`[data-automation-id="home-link"]`);
  await homeLink.click();
  await expect(page).toHaveTitle(`Home`);
  await page.getByRole('button', { name: `Helps`, exact: true }).click();
  await page.getByRole('button', { name: `About`, exact: true }).click();
  await expect(page).toHaveTitle(`About`);
});
