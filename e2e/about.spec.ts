import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test('should display company information', async ({ page }) => {
    // Navigate to the About page
    await page.goto('/about');

    // Check if the main heading is present (from prototype)
    await expect(page.locator('h1')).toContainText('Engineering the future through');

    // Check for mission, vision, team sections (from prototype)
    await expect(page.getByText('Our Mission')).toBeVisible();
    await expect(page.getByText('Our Vision')).toBeVisible();
    await expect(page.getByText('The Collective')).toBeVisible();

    // Check if the contact call to action button is present (in footer or CTA)
    await expect(page.getByRole('button', { name: 'Start Your Project' })).toBeVisible();
  });

  test('should navigate from home to about', async ({ page }) => {
    // Start from the home page
    await page.goto('/');

    // Find the link to the About page in the header and click it
    await page.locator('header nav').getByRole('link', { name: 'About', exact: true }).click();

    // Verify navigation to the about page
    await expect(page).toHaveURL(/\/about/);
    await expect(page.locator('h1')).toContainText('Engineering the future through');
  });
});
