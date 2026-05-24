import { test, expect } from '@playwright/test';

import { SliderPage } from '../pages/SliderPage';

import { attachLogs } from '../utils/logger';

test.describe('Slider Demo', () => {

  test.beforeEach(async ({ page }) => {

    await attachLogs(page);

  });

  test('Move slider to 95', async ({ page }) => {

    const sliderPage = new SliderPage(page);

    await sliderPage.open();

    await sliderPage.moveSliderTo95();

    await expect(
      await sliderPage.getSliderValue()
    ).toHaveText('95');

  });

});