import { test as setup } from '@playwright/test';
import path from 'path';
import { loginToApplication } from '../pages/utils';

const authFile = path.resolve(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  // Perform authentication steps
  await loginToApplication(page);

  // Save storage state into the file
  await page.context().storageState({ path: authFile });
});