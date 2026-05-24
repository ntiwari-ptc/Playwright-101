# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: slider.spec.ts >> Slider Demo >> Move slider to 95
- Location: tests/slider.spec.ts:15:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#rangeSuccess')
Expected: "95"
Received: "15"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#rangeSuccess')
    14 × locator resolved to <output id="rangeSuccess">15</output>
       - unexpected value "15"

```

```yaml
- status: "15"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import { SliderPage } from '../pages/SliderPage';
  4  | 
  5  | import { attachLogs } from '../utils/logger';
  6  | 
  7  | test.describe('Slider Demo', () => {
  8  | 
  9  |   test.beforeEach(async ({ page }) => {
  10 | 
  11 |     await attachLogs(page);
  12 | 
  13 |   });
  14 | 
  15 |   test('Move slider to 95', async ({ page }) => {
  16 | 
  17 |     const sliderPage = new SliderPage(page);
  18 | 
  19 |     await sliderPage.open();
  20 | 
  21 |     await sliderPage.moveSliderTo95();
  22 | 
  23 |     await expect(
  24 |       await sliderPage.getSliderValue()
> 25 |     ).toHaveText('95');
     |       ^ Error: expect(locator).toHaveText(expected) failed
  26 | 
  27 |   });
  28 | 
  29 | });
```