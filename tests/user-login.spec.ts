import { test, expect } from '@playwright/test';

test('Checks if a user can log in with valid credentials.', async ({ page }) => {
  // 1. Navigate to login page
  await page.goto('https://www.saucedemo.com');

  // 2. Enter username as standard_user
  await page.locator('[data-test="username"]').fill('standard_user');

  // 3. Enter password as secret_sauce
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // 4. Click login button
  await page.locator('[data-test="login-button"]').click();

  // 5. Wait for dashboard to appear
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // 6. Verify dashboard is displayed [TAKE SCREENSHOT]
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await page.locator('[data-test="title"]').screenshot({
    path: 'C:\Users\RAJU\playwright-yaml-test\test-artifacts\user-login-test\dashboard-displayed.png',
    quality: 50,
    scale: 'css',
    type: 'jpeg'
  });
});
