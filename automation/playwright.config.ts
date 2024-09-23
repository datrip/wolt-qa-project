// automation/playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 60000,
  retries: 0,
  use: {
    headless: false,
    testIdAttribute: 'data-test-id',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 30000,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    baseURL: 'https://wolt.com',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ]
};
export default config;