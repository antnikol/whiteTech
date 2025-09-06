import { BaseSignPage } from './baseSign.page.js';
import { signData } from '../fixtures/sign.data.js';

export class SignUpPage extends BaseSignPage {
  constructor(page) {
    super(page);

    // Initialize form fields
    this.emailInput = page.getByPlaceholder(signData.emailPlaceholder);
    this.passwordInput = page.getByPlaceholder(signData.passwordPlaceholder).first();
    this.confirmPasswordInput = page.getByPlaceholder(signData.passwordPlaceholder).nth(1);
    this.createAccountButton = page.getByRole('button', { name: signData.buttons.createAccount });
    
    // Initialize navigation
    this.loginLinkButton = page.getByRole('link', { name: signData.buttons.login });
    this.switchToBusinessLink = page.getByRole('link', { name: signData.buttons.switchToBusiness });

    // Initialize text elements
    this.emailLabel = page.locator('mat-label[datatestrole="label"]').filter({ hasText: signData.labels.email });
    this.passwordLabel = page.locator('mat-label[datatestrole="label"]').filter({ hasText: signData.labels.password });
    
    // Initialize footer elements
    this.footerText = page.locator('auth-footer p');
    this.termsLink = page.locator(`a[href="${signData.termsLink}"]`);
    
    // Initialize UI elements
    this.emailInfoIcon = page.locator('ngp-tooltip.nw-ml-1 ngp-icon[role="img"]');
    
    // Initialize sign-up specific text elements
    this.pageTitle = page.getByRole('heading', { name: signData.titles.page });
    this.confirmPasswordLabel = page.locator('mat-label[datatestrole="label"]').filter({ hasText: signData.labels.confirmPassword });
    
    // Initialize sign-up specific password requirements
    this.minCharRequirement = page.getByText(signData.passwordRequirements[0]);
    this.lowercaseRequirement = page.getByText(signData.passwordRequirements[1]);
    this.uppercaseRequirement = page.getByText(signData.passwordRequirements[2]);
    this.numberRequirement = page.getByText(signData.passwordRequirements[3]);
    this.requirementIcons = page.locator('div.ngp-field-requirements-item__icon');
  }
}

export default SignUpPage;
