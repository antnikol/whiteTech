import { BaseSignPage } from './baseSign.page.js';
import { signData } from '../fixtures/sign.data.js';

export class SignInPage extends BaseSignPage {
  constructor(page) {
    super(page);
    
    // Form fields
    this.emailInput = page.getByPlaceholder(signData.emailPlaceholder);
    this.passwordInput = page.getByPlaceholder(signData.passwordPlaceholder);
    this.loginButton = page.getByRole('button', { name: signData.buttons.login });

    // Error messages
    this.emailErrorMessage = page.locator('#mat-error-0');
    this.passwordErrorMessage = page.locator('#mat-error-1');
  }

  fillEmailField(email) {
    return this.emailInput.fill(email);
  }

  fillPasswordField(password) {
    return this.passwordInput.fill(password);
  }

  blurEmailField() {
    return this.emailInput.blur();
  }

  blurPasswordField() {
    return this.passwordInput.blur();
  }

}

export default SignInPage;
