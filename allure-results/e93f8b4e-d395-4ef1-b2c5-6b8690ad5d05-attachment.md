# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: file.spec.js >> File upload
- Location: tests\file.spec.js:3:5

# Error details

```
Error: page.goto: NS_ERROR_UNKNOWN_SOCKET_TYPE
Call log:
  - navigating to "https://practice.expandtesting.com/upload", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - heading "Oops." [level=1] [ref=e5]
    - paragraph [ref=e6]: Firefox doesn’t know how to communicate with the server.
    - paragraph
  - button "Try Again" [active] [ref=e8]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("File upload", async ({ page }) => {
  4  | 
> 5  |     await page.goto("https://practice.expandtesting.com/upload");
     |                ^ Error: page.goto: NS_ERROR_UNKNOWN_SOCKET_TYPE
  6  |         await page.waitForTimeout(2000)
  7  | 
  8  | 
  9  |     const file = 'C:\\Users\\Punam Jadhav\\OneDrive\\Desktop\\Telecom.postman_environment.json';
  10 | 
  11 |     await page.setInputFiles('#fileInput', file);
  12 | 
  13 |     await page.waitForTimeout(4000)
  14 | 
  15 |     await page.locator('#fileSubmit').click();
  16 |         await page.waitForTimeout(2000)
  17 | 
  18 |        
  19 | });
```