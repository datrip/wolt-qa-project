import { PlaywrightTestConfig, devices } from '@playwright/test';
import path from 'path';

const authFile = path.resolve(__dirname, 'playwright/.auth/user.json');

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
    // Remove storageState here if it's project-specific
  },
  projects: [
    // Setup project
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    // Testing projects
    {
      name: 'chromium',
      //dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: authFile,
      },
    },
  ],
};
export default config;