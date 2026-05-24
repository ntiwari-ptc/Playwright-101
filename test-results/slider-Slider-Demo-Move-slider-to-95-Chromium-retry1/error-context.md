# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: slider.spec.ts >> Slider Demo >> Move slider to 95
- Location: tests/slider.spec.ts:15:7

# Error details

```
Error: Channel closed
```

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#rangeSuccess')
Expected: "95"
Received: "15"

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#rangeSuccess')
    6 × locator resolved to <output id="rangeSuccess">15</output>
      - unexpected value "15"

```

```yaml
- status: "15"
```

```
Error: apiRequestContext._wrapApiCall: Target page, context or browser has been closed
```