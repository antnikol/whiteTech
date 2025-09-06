export class MainPage {
    constructor(page) {
        this.page = page;
        this.openAccount = page.locator('a.banner-section__button', { hasText: /Open account/i });
    }

    async clickOpenAccountButton(url) {
        await this.openAccount.click();
        await this.page.waitForURL(url);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async goto() {
        await this.page.goto('/');
        await this.page.waitForLoadState('domcontentloaded');
    }
}
