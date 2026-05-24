import { test, expect } from '@playwright/test';
import { SliderPage } from '../pages/SliderPage';

test.describe('Slider Demo', () => {

  test('Move slider to 95', async ({ page }) => {

    const sliderPage = new SliderPage(page);

    await sliderPage.open();

    await sliderPage.moveSliderTo95();

    await expect(await sliderPage.getSliderValue())
      .toHaveText('95');
  });
});
