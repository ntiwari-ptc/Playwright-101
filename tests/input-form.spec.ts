import { test, expect } from '@playwright/test';
import { InputFormPage } from '../pages/InputFormPage';
import { testData } from '../utils/testData';

test.describe('Input Form Submit', () => {

  test('Validate successful form submission', async ({ page }) => {

    const formPage = new InputFormPage(page);

    await formPage.open();

    await formPage.clickSubmit();

    await expect(page.locator("input:invalid")).toBeVisible();

    await formPage.fillForm(testData);

    await formPage.clickSubmit();

    await expect(await formPage.successMessage()).toBeVisible();
  });
});
