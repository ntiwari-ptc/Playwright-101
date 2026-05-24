import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  workers: 2,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'https://www.testmuai.com',
    screenshot: 'on',
    video: 'on',
    trace: 'on',

    actionTimeout: 30000,
    navigationTimeout: 60000
  },

  projects: [
    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },
    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    }
  ]
});
