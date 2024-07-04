import { defineConfig, devices } from '@playwright/test';
import * as os from 'os';

export default defineConfig({
  testDir: './test/src',
  globalSetup: require.resolve('./test/global-setup'),
  timeout: 30 * 1000,
  expect: {
    timeout: 15000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env['CI'],
  retries: 1,
  workers: 1,
  reporter: [
    ['blob'],
    ['html'],
    [
      'allure-playwright',
      {
        detail: true,
        suiteTitle: false,
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
      },
    ],
  ],
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