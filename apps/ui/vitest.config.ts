// vitest.config.ts
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    browser: {
      provider: playwright({
        // ...custom playwright options
      }),
      instances: [{ browser: 'chromium' }],
    }
  },
});
