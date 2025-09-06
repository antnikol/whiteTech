import { test, expect } from '@playwright/test';
import { SignUpPage } from '../PageObjects/signUp.page.js';
import { MainPage } from '../PageObjects/main.page.js';
import { BaseSignPage } from '../PageObjects/baseSign.page.js';
import { signData } from '../fixtures/sign.data.js';

test.describe('Signup Flow', () => {
  test('Verify all signup page UI elements', async ({ page, context }) => {
    const mainPage = new MainPage(page);
    const baseSignPage = new BaseSignPage(page);
    const signUpPage = new SignUpPage(page);

    await mainPage.goto();
    await page.waitForSelector('a.banner-section__button', { timeout: 30000 });
    await mainPage.clickOpenAccountButton(signData.signUpUrl);

    // Check header elements
    await expect(baseSignPage.paydoLogo).toBeVisible();
    await expect(baseSignPage.paydoLogo).toHaveAttribute('src', signData.images.logo);
    await expect(baseSignPage.accountTypeLabel).toBeVisible();
    await expect(baseSignPage.accountTypeLabel).toHaveText(signData.accountType);

    // Check slider elements
    await expect(baseSignPage.slider).toBeVisible();
    await expect(baseSignPage.sliderItems).toHaveCount(3);

    // Verify slider images
    const expectedImages = signData.images.slider;
    const expectedTitles = signData.sliderTitles;
    for (let i = 0; i < 3; i++) {
      await expect(baseSignPage.sliderImages.nth(i)).toHaveAttribute('src', expectedImages[i]);
      await expect(baseSignPage.sliderTitles.nth(i)).toHaveText(expectedTitles[i]);
    }

    // Verify pagination
    await expect(baseSignPage.sliderPagination).toBeVisible();
    await expect(baseSignPage.sliderPaginationBullets).toHaveCount(3);
    await expect(baseSignPage.activePaginationBullet).toBeVisible();

    // Check main form elements
    await expect(signUpPage.pageTitle).toBeVisible();
    await expect(signUpPage.emailInput).toBeVisible();
    await expect(signUpPage.passwordInput).toBeVisible();
    await expect(signUpPage.confirmPasswordInput).toBeVisible();
    await expect(signUpPage.createAccountButton).toBeVisible();
    await expect(signUpPage.createAccountButton).toBeDisabled();

    // Check navigation elements
    await expect(signUpPage.backToHomeLink).toBeVisible();
    await expect(signUpPage.loginLinkButton).toBeVisible();
    await expect(signUpPage.switchToBusinessLink).toBeVisible();

    // Check labels
    await expect(signUpPage.emailLabel).toBeVisible();
    await expect(signUpPage.emailInfoIcon).toBeVisible();
    await expect(signUpPage.passwordLabel).toBeVisible();
    await expect(signUpPage.confirmPasswordLabel).toBeVisible();

    // Check password requirements
    await expect(signUpPage.minCharRequirement).toBeVisible();
    await expect(signUpPage.lowercaseRequirement).toBeVisible();
    await expect(signUpPage.uppercaseRequirement).toBeVisible();
    await expect(signUpPage.numberRequirement).toBeVisible();
    await expect(signUpPage.requirementIcons).toHaveCount(4);

    // Check footer elements
    await expect(signUpPage.footerText).toBeVisible();
    await expect(signUpPage.footerText).toContainText(signData.footer.text);
    await expect(signUpPage.termsLink).toBeVisible();
    await expect(signUpPage.termsLink).toHaveText(signData.footer.termsLink);
  });
});
