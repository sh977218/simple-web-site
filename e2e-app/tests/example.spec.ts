import { expect } from '@playwright/test';
import { test } from '../baseTest';

test('Click home link', async ({ myPage, baseURL }) => {
  await myPage.goto(baseURL);
  await expect(myPage).toHaveTitle(`AngularWithPlaywright`);
  const homeLink = myPage.locator(`[data-automation-id="home-link"]`);
  await homeLink.click();
  await expect(myPage).toHaveTitle(`Home`);
});
