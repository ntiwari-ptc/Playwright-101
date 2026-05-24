import { Page } from '@playwright/test';

export class SliderPage {

  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/selenium-playground/');
    await this.page.getByText('Drag & Drop Sliders').click();
  }

  async moveSliderTo95() {
    const slider = this.page.locator("input[value='15']");

    await slider.evaluate((el: any) => {
      el.value = 95;
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
  }

  async getSliderValue() {
    return this.page.locator('#rangeSuccess');
  }
}
