import { expect } from '@playwright/test';
import test from 'test/fixtures/baseTest';

test.describe('Click search link', async () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/');
    await page.locator(`[data-automation-id="search-link"]`).first().click();
    await expect(page).toHaveTitle(`Search`);
  });
  test('es result', async ({page}) => {
    await expect(page.getByTestId('esResult')).toContainText(
      'Radiation resistance,Turning tiny,Radiation blast'
    );
  });
  test('mongo result', async ({page}) => {
    await expect(page.getByTestId('mongoResult')).toContainText(
      'Radiation resistance,Turning tiny,Radiation blast'
    );
  });
});
