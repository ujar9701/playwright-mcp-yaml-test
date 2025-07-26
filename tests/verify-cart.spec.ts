import { test, expect } from '@playwright/test';

test('Verify Cart Test', async ({ page }) => {
  // 1. Navigate to login page
  await page.goto('https://www.saucedemo.com/');

  // 2. click on the Maximize button (handled by setting viewport size)
  await page.setViewportSize({ width: 1920, height: 1080 });

  // 3. Enter username as standard_user
  await page.locator('[data-test="username"]').fill('standard_user');

  // 4. Enter password as secret_sauce
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // 5. Click login button
  await page.locator('[data-test="login-button"]').click();

  // 6. Wait for dashboard to appear (implicitly handled by next action)

  // 7. Click on the cart icon
  await page.locator('[data-test="shopping-cart-link"]').click();

  // 8. Verify the cart title is "Your Cart" [TAKE SCREENSHOT]
  await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart');
  await page.screenshot({ path: 'C:\Users\RAJU\playwright-yaml-test\test-artifacts\verify-cart-test\cart-title-is-your-cart.png' });

  // 9. Verify the cart table header is "QTY" [TAKE SCREENSHOT]
  await expect(page.locator('.cart_quantity_label')).toHaveText('QTY');
  await page.screenshot({ path: 'C:\Users\RAJU\playwright-yaml-test\test-artifacts\verify-cart-test\cart-table-header-is-present.png' });

  // 10. Verify the continue shopping button is "Continue Shopping" [TAKE SCREENSHOT]
  await expect(page.locator('[data-test="continue-shopping"]')).toHaveText('Continue Shopping');
  await page.screenshot({ path: 'C:\Users\RAJU\playwright-yaml-test\test-artifacts\verify-cart-test\continue-shopping-button-is-present.png' });

  // 11. Verify the checkout button is "Checkout" [TAKE SCREENSHOT]
  await expect(page.locator('[data-test="checkout"]')).toHaveText('Checkout');
  await page.screenshot({ path: 'C:\Users\RAJU\playwright-yaml-test\test-artifacts\verify-cart-test\checkout-button-is-present.png' });
});
