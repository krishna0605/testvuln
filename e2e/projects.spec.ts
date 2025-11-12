import { test, expect } from '@playwright/test';

test('Projects page should render correctly', async ({ page }) => {
  await page.goto('/projects');
  await expect(page.locator('h1:has-text("Projects")')).toBeVisible();
  await page.screenshot({ path: 'projects_page.png' });
});