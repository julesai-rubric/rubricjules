import { test, expect } from '@playwright/test';

test.describe('Global Navigation', () => {
  test('should have all navigation links in the header', async ({ page }) => {
    await page.goto('/');

    const nav = page.locator('header nav');
    await expect(nav.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'About', exact: true })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Work', exact: true })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Careers', exact: true })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Contact', exact: true })).toBeVisible();
  });

  test('should navigate to Work page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Work', exact: true }).click();
    await expect(page).toHaveURL(/\/work/);
    await expect(page.locator('h1')).toContainText('Our Work');
  });

  test('should navigate to Careers page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Careers', exact: true }).click();
    await expect(page).toHaveURL(/\/careers/);
    await expect(page.locator('h1')).toContainText('Join Our Team');
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Contact', exact: true }).click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.locator('h1')).toContainText('Contact Us');
  });
});
