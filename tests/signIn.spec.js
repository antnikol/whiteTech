import { test, expect } from '@playwright/test';
import { signData } from '../fixtures/sign.data.js';
import { SignInPage } from '../PageObjects/signIn.page.js';

test.describe('SignIn Flow', () => {
  test('Verify LogIn page error messages', async ({ page, context }) => {
    const signInPage = new SignInPage(page);

    await page.goto(signData.signInUrl);

    // Test all email validation cases
    for (const tc of signData.emailTestCases) {
      await signInPage.fillEmailField(tc.value);
      await signInPage.blurEmailField(); 
      await expect(signInPage.emailErrorMessage).toBeVisible();
      await expect(signInPage.emailErrorMessage).toHaveText(tc.expectedError);
    }

    // Test all password validation cases
    for (const tc of signData.passwordTestCases) {
      await signInPage.fillPasswordField(tc.value);
      await signInPage.blurPasswordField(); 
      await expect(signInPage.passwordErrorMessage).toBeVisible();
      await expect(signInPage.passwordErrorMessage).toHaveText(tc.expectedError);
    }
  });
});
