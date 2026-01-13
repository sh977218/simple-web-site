import { expect } from '@playwright/test';
import test from '../fixtures/baseTest';

test.describe('Click search link', async () => {
  test.beforeEach(async ({ page }) => {
    await page.locator(`[data-automation-id="search-link"]`).first().click();
    await expect(page).toHaveTitle(`Search`);
  });
  test('es result', async ({ page }) => {
    const appHero = page.getByTestId('esResult').locator('app-hero');
    await expect(appHero.first()).toContainText(
      'Radiation resistance,Turning tiny,Radiation blast',
    );
    await expect(appHero.nth(1)).toContainText('Lonely Super hero');
  });
  test('mongo result', async ({ page }) => {
    const appHero = page.getByTestId('mongoResult').locator('app-hero');
    await expect(appHero.first()).toContainText('Lonely Super hero');
    await expect(appHero.nth(1)).toContainText(
      'Radiation resistance,Turning tiny,Radiation blast',
    );
  });
});
