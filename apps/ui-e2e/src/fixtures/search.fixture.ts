import { expect, test as baseTest } from '@playwright/test';
import { SearchPo } from '@shared/shared-models';

const test = baseTest.extend<{
  searchPage: SearchPo;
}>({
  searchPage: async ({ page }, use) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Search' }).click();
    await expect(page).toHaveTitle(`Search`);
    await use(new SearchPo(page));
  },
});

export { test };
