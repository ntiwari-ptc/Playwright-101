import { test, expect } from '@playwright/test';

import { SimpleFormPage } from '../pages/SimpleFormPage';

import { testData } from '../utils/testData';

import { attachLogs } from '../utils/logger';

test.describe('Simple Form Demo', () => {

  test.beforeEach(async ({ page }) => {

    await attachLogs(page);

  });

  test('Validate entered message', async ({ page }) => {

    const simpleForm = new SimpleFormPage(page);

    await simpleForm.open();

    await expect(page).toHaveURL(/simple-form-demo/);

    await simpleForm.enterMessage(testData.message);

    await simpleForm.clickGetCheckedValue();

    await expect(
      await simpleForm.getDisplayedMessage()
    ).toHaveText(testData.message);

  });

});