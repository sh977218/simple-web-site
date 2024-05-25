import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src',
  globalSetup: require.resolve('./global-setup'),
  timeout: 30 * 1000,
  expect: {
    timeout: 15000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env['CI'],
  retries: 1,
  workers: 1,
  reporter: process.env['CI'] ? 'blob' : 'html',
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:4200',

    trace: 'on-first-retry',
    video: 'retry-with-video',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: [
    {
      command: 'npm run start:server',
      port: 3000,
      reuseExistingServer: true,
    },
    {
      command: 'npm run start:playwright',
      port: 4200,
      reuseExistingServer: true,
    },
  ],
});
