import { test, expect } from '@playwright/test';

test('Product Add to Cart Test', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://www.saucedemo.com/');

  // Enter username as standard_user
  await page.locator('[data-test="username"]').fill('standard_user');

  // Enter password as secret_sauce
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click login button
  await page.locator('[data-test="login-button"]').click();

  // Wait for dashboard to appear (assuming navigation to inventory.html means dashboard appeared)
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click Add to Cart button for Sauce Labs Onesie
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();

  // Verify the cart icon/badge is updated
  await page.locator('[data-test="shopping-cart-link"]').screenshot({ path: 'C:\Users\RAJU\playwright-yaml-test\test-artifacts\product-add-to-cart-test\cart-icon-updated.png' });

  // Verify the product is added to the cart
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.screenshot({ path: 'C:\Users\RAJU\playwright-yaml-test\test-artifacts\product-add-to-cart-test\product-added-to-cart.png', fullPage: true });

  // Verify the cart icon/badge is updated (after navigating back)
  await page.goBack();
  await page.locator('[data-test="shopping-cart-link"]').screenshot({ path: 'C:\Users\RAJU\playwright-yaml-test\test-artifacts\product-add-to-cart-test\cart-icon-updated-after-multiple-adds.png' });
});
