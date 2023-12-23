import { test as baseTest } from '@playwright/test';
import { promises as fs } from 'fs';
import { join } from 'path';
import { randomBytes } from 'crypto';

export const test = baseTest.extend({
  page: async ({ page }, use) => {
    await use(page);
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
  },
});
