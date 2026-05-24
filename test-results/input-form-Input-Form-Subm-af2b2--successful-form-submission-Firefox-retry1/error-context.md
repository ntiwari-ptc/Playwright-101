# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: input-form.spec.ts >> Input Form Submit >> Validate successful form submission
- Location: tests/input-form.spec.ts:17:7

# Error details

```
Error: Channel closed
```

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.testmuai.com/selenium-playground/", waiting until "load"

```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class InputFormPage {
  4  | 
  5  |   constructor(private page: Page) {}
  6  | 
  7  |   async open() {
> 8  |     await this.page.goto('/selenium-playground/');
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  9  |     await this.page.getByText('Input Form Submit').click();
  10 |   }
  11 | 
  12 |   async clickSubmit() {
  13 |     await this.page.getByRole('button', { name: 'Submit' }).click();
  14 |   }
  15 | 
  16 |   async fillForm(data: any) {
  17 | 
  18 |     await this.page.locator("input[name='name']").fill(data.name);
  19 | 
  20 |     await this.page.locator("input[name='email']").fill(data.email);
  21 | 
  22 |     await this.page.locator("input[name='password']").fill(data.password);
  23 | 
  24 |     await this.page.locator("input[name='company']").fill(data.company);
  25 | 
  26 |     await this.page.selectOption('select[name="country"]', {
  27 |       label: 'United States'
  28 |     });
  29 | 
  30 |     await this.page.locator("input[name='city']").fill(data.city);
  31 | 
  32 |     await this.page.locator("input[name='address_line1']").fill(data.address);
  33 | 
  34 |     await this.page.locator("input[name='state']").fill(data.state);
  35 | 
  36 |     await this.page.locator("input[name='zip']").fill(data.zip);
  37 |   }
  38 | 
  39 |   async successMessage() {
  40 |     return this.page.getByText(
  41 |       'Thanks for contacting us, we will get back to you shortly.'
  42 |     );
  43 |   }
  44 | }
  45 | 
```