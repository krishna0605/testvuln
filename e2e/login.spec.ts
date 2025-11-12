import { test, expect } from '@playwright/test';

test('Login redirects to dashboard', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[type="email"]', 'test@example.com');
  await page.fill('input[type="password"]', 'password123');
  await page.click('button:has-text("Log In")');
  await page.waitForURL('**/dashboard');
  await expect(page.locator('h1:has-text("Dashboard")')).toBeVisible();
});