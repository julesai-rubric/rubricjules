import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test('should display company information', async ({ page }) => {
    // Navigate to the About page
    await page.goto('/about');

    // Check if the main heading is present
    await expect(page.locator('h1')).toContainText('About Rubric');

    // Check for mission, vision, team, and approach sections
    await expect(page.getByText('Our Mission')).toBeVisible();
    await expect(page.getByText('Our Vision')).toBeVisible();
    await expect(page.getByText('Our Team')).toBeVisible();
    await expect(page.getByText('Our Approach')).toBeVisible();

    // Check if the contact call to action is present
    await expect(page.getByRole('link', { name: 'Contact Us' })).toBeVisible();
  });

  test('should navigate from home to about', async ({ page }) => {
    // Start from the home page
    await page.goto('/');

    // Find the link to the About page and click it
    await page.getByRole('link', { name: 'About', exact: true }).click();

    // Verify navigation to the about page
    await expect(page).toHaveURL(/\/about/);
    await expect(page.locator('h1')).toContainText('About Rubric');
  });
});
