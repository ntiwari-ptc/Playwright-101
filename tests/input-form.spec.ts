import { test, expect } from '@playwright/test';

import { InputFormPage } from '../pages/InputFormPage';

import { testData } from '../utils/testData';

import { attachLogs } from '../utils/logger';

test.describe('Input Form Submit', () => {

  test.beforeEach(async ({ page }) => {

    await attachLogs(page);

  });

  test('Validate successful form submission', async ({ page }) => {

    const formPage = new InputFormPage(page);

    await formPage.open();

    // Empty form validation
    await formPage.clickSubmit();

    await expect(
      page.locator('input:invalid')
    ).toBeVisible();

    // Fill form
    await formPage.fillForm(testData);

    // Submit form
    await formPage.clickSubmit();

    // Validate success message
    await expect(
      await formPage.successMessage()
    ).toBeVisible();

  });

});