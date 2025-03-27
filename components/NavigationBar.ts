import { Page, Locator } from '@playwright/test';

export class NavigationBar {
    private page: Page;
    private homeButton: Locator;
    private contactButton: Locator;
    private aboutButton: Locator;
    private cartButton: Locator;
    private loginButton: Locator;
    private signUpButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeButton = this.page.locator("a[href='index.html']" , { hasText: "Home" });
        this.contactButton = this.page.locator('a:text("Contact")');
        this.aboutButton = this.page.locator('a.nav-link[data-target="#videoModal"]');
        this.cartButton = this.page.locator('id=cartur');
        this.loginButton = this.page.locator("[id*='login']", { hasText: "Log in" });
        this.signUpButton = this.page.locator("[id*='signin']", { hasText: "Sign up" });
    }

    public async clickHomeButton() {
        await this.homeButton.click();
    }

    public async clickContactButton() {
        await this.contactButton.click();
    }

    public async clickAboutButton() {
        await this.aboutButton.click();
    }

    public async clickCartButton() {
        await this.cartButton.click();
    }

    public async clickLogInButton() {
        await this.loginButton.click();
    }

    public async clickSignUpButton() {
        await this.signUpButton.click();
    }
}
