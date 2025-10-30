import { test, expect } from '@playwright/test';

test('User Login Test', async ({ page }) => {
  // 1. Navigate to login page
  await page.goto('https://www.saucedemo.com');

  // 2. click on the Maximize button
  await page.setViewportSize({ width: 1920, height: 1080 });

  // 3. Enter username as standard_user
  await page.locator('[data-test="username"]').fill('standard_user');

  // 4. Enter password as secret_sauce
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // 5. Click login button
  await page.locator('[data-test="login-button"]').click();

  // 6. Wait for dashboard to appear
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // 7. Verify dashboard is displayed [TAKE SCREENSHOT]
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await page.screenshot({ path: 'C:\\Users\\rajut\\playwright-yaml-test\\test-artifacts\\user-login-test/dashboard-displayed.png' });
});