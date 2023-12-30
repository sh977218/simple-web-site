import { Page, test as baseTest } from '@playwright/test';
import { randomBytes } from 'crypto';
import { promises as fs } from 'fs';
import { join } from 'path';

async function codeCoverage(page: Page) {
  const coverage: string = await page.evaluate(
    'JSON.stringify(window.__coverage__);'
  );
  if (coverage) {
    const name = randomBytes(32).toString('hex');
    await fs.writeFile(
      join(__dirname, '.', '.nyc_output', `${name}.json`),
      coverage
    );
  }
}

const test = baseTest.extend({
  page: async ({ page }, use) => {
    await use(page);
  },
});

test.beforeEach(async ({ page }) => {
  await codeCoverage(page);
});

export default test;
