import { Page } from '@playwright/test';

export async function attachLogs(page: Page) {

  // Console Logs
  page.on('console', msg => {
    console.log(`[CONSOLE] ${msg.type()} : ${msg.text()}`);
  });

  // Network Request Logs
  page.on('request', request => {
    console.log(
      `[REQUEST] ${request.method()} : ${request.url()}`
    );
  });

  // Network Response Logs
  page.on('response', response => {
    console.log(
      `[RESPONSE] ${response.status()} : ${response.url()}`
    );
  });

  // Failed Requests
  page.on('requestfailed', request => {
    console.log(
      `[FAILED REQUEST] ${request.url()}`
    );
  });

}