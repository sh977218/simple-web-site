import { expect } from '@playwright/test';
import test from 'test/fixtures/baseTest';

test.fixme('Click search link', async ({ page }) => {
  await page.goto('/');
  await page.locator(`[data-automation-id="search-link"]`).first().click();
  await expect(page).toHaveTitle(`Search`);
  await expect(page.getByTestId('esResult')).toContainText(
    'Radiation resistance,Turning tiny,Radiation blast'
  );
  await expect(page.getByTestId('mongoResult')).toContainText(
    'Radiation resistance,Turning tiny,Radiation blast'
  );
});
