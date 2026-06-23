import { test, expect } from '@playwright/test';

test.describe('Careers and Applications', () => {
  test('should display job listings', async ({ page }) => {
    await page.goto('/careers');
    await expect(page.locator('h1')).toContainText('Join Our Team');
    await expect(page.getByText('Senior Frontend Engineer')).toBeVisible();
    await expect(page.getByText('Product Designer')).toBeVisible();
    await expect(page.getByText('Full Stack Developer')).toBeVisible();
  });

  test('should navigate to application form from a job listing', async ({ page }) => {
    await page.goto('/careers');
    await page.getByRole('link', { name: 'Apply Now' }).first().click();
    await expect(page).toHaveURL(/\/careers\/apply\?job=sr-frontend/);
    await expect(page.locator('h1')).toContainText('Apply for a Position');
  });

  test('should submit a job application successfully', async ({ page }) => {
    await page.goto('/careers/apply?job=sr-frontend');

    await page.fill('#firstName', 'Jane');
    await page.fill('#lastName', 'Smith');
    await page.fill('#email', 'jane.smith@example.com');
    await page.fill('#resume', 'https://example.com/resume.pdf');
    await page.fill('#coverLetter', 'I am very excited about this position at Rubric!');

    await page.click('button[type="submit"]');

    await expect(page.locator('h1')).toContainText('Application Received!');
    await expect(page.getByText('Thank you for your interest')).toBeVisible();
  });

  test('should navigate to careers from home page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Careers' }).click();
    await expect(page).toHaveURL(/\/careers/);
    await expect(page.locator('h1')).toContainText('Join Our Team');
  });
});
