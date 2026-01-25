import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

const isCI = !!process.env.CI;

export default defineConfig({
  test: {
    browser: {
      provider: playwright({
        // ...custom playwright options
      }),
      enabled: !isCI,
      instances: [{ browser: 'chromium' }],
    },
  },
});
