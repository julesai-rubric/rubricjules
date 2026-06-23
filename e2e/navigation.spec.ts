import { test, expect } from '@playwright/test';

test.describe('Global Navigation', () => {
  test('should have all navigation links in the header', async ({ page }) => {
    await page.goto('/');

    const nav = page.locator('header nav');
    await expect(nav.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Services', exact: true })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'About', exact: true })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Careers', exact: true })).toBeVisible();
  });

  test('should navigate to Careers page', async ({ page }) => {
    await page.goto('/');
    await page.locator('header nav').getByRole('link', { name: 'Careers', exact: true }).click();
    await expect(page).toHaveURL(/\/careers/);
    await expect(page.locator('h1')).toContainText('Join the Architecture of the Future');
  });

  test('should navigate to Services page', async ({ page }) => {
    await page.goto('/');
    await page.locator('header nav').getByRole('link', { name: 'Services', exact: true }).click();
    await expect(page).toHaveURL(/\/services/);
    await expect(page.locator('h1')).toContainText('Precision Engineering for Digital Assurance');
  });
});
