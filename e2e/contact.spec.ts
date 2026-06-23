import { test, expect } from '@playwright/test';

test.describe('Contact Enquiry', () => {
  test('should navigate to contact page from navigation', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.locator('h1')).toContainText('Get in Touch');
  });

  test('should navigate to contact page from about page', async ({ page }) => {
    await page.goto('/about');
    await page.getByRole('link', { name: 'Contact Us' }).click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.locator('h1')).toContainText('Get in Touch');
  });

  test('should submit a contact enquiry successfully', async ({ page }) => {
    await page.goto('/contact');

    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john.doe@example.com');
    await page.fill('#subject', 'New Project Inquiry');
    await page.fill('#message', 'I would like to discuss a new project with Rubric.');

    await page.click('button[type="submit"]');

    await expect(page.locator('h1')).toContainText('Message Sent!');
    await expect(page.getByText('Thank you for reaching out')).toBeVisible();

    await page.click('button:has-text("Back to Home")');
    await expect(page).toHaveURL('/');
  });
});
