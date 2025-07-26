import { test, expect } from '@playwright/test';

test('Verify Dashboard Parameters', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://www.saucedemo.com/');

  // click on the Maximize button
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Enter username as standard_user
  await page.locator('[data-test="username"]').fill('standard_user');

  // Enter password as secret_sauce
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click login button
  await page.locator('[data-test="login-button"]').click();

  // Wait for dashboard to appear (implicitly handled by subsequent actions or can add a specific wait if needed)
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // Verify the page title is 'Swag Labs' [TAKE SCREENSHOT]
  await expect(page).toHaveTitle('Swag Labs');
  await page.screenshot({ path: 'test-artifacts/verify-dashboard-parameters/page-title-is-swag-labs.png' });

  // Verify the filter options are present [TAKE SCREENSHOT]
  await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
  await page.screenshot({ path: 'test-artifacts/verify-dashboard-parameters/filter-options-present.png' });

  // Verify the filter options are clickable [TAKE SCREENSHOT]
  await page.locator('[data-test="product-sort-container"]').click();
  await page.screenshot({ path: 'test-artifacts/verify-dashboard-parameters/filter-options-clickable.png' });

  // Verify the menu items are present [TAKE SCREENSHOT]
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await expect(page.locator('#react-burger-menu-btn')).toBeVisible();
  await expect(page.locator('#inventory_sidebar_link')).toBeVisible();
  await expect(page.locator('#about_sidebar_link')).toBeVisible();
  await expect(page.locator('#logout_sidebar_link')).toBeVisible();
  await expect(page.locator('#reset_sidebar_link')).toBeVisible();
  await page.screenshot({ path: 'test-artifacts/verify-dashboard-parameters/menu-items-present.png' });

  // Verify the menu items are clickable [TAKE SCREENSHOT]
  await page.locator('#inventory_sidebar_link').click();
  await page.screenshot({ path: 'test-artifacts/verify-dashboard-parameters/menu-items-clickable.png' });
});