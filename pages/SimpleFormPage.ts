import { Page } from '@playwright/test';

export class SimpleFormPage {

  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/selenium-playground/');
    await this.page.getByText('Simple Form Demo').click();
  }

  async enterMessage(message: string) {
    await this.page.locator('#user-message').fill(message);
  }

  async clickGetCheckedValue() {
    await this.page.getByRole('button', { name: 'Get Checked Value' }).click();
  }

  async getDisplayedMessage() {
    return this.page.locator('#message');
  }
}
