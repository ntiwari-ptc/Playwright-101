import { Page } from '@playwright/test';

export class InputFormPage {

  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/selenium-playground/');
    await this.page.getByText('Input Form Submit').click();
  }

  async clickSubmit() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async fillForm(data: any) {

    await this.page.locator("input[name='name']").fill(data.name);

    await this.page.locator("input[name='email']").fill(data.email);

    await this.page.locator("input[name='password']").fill(data.password);

    await this.page.locator("input[name='company']").fill(data.company);

    await this.page.selectOption('select[name="country"]', {
      label: 'United States'
    });

    await this.page.locator("input[name='city']").fill(data.city);

    await this.page.locator("input[name='address_line1']").fill(data.address);

    await this.page.locator("input[name='state']").fill(data.state);

    await this.page.locator("input[name='zip']").fill(data.zip);
  }

  async successMessage() {
    return this.page.getByText(
      'Thanks for contacting us, we will get back to you shortly.'
    );
  }
}
