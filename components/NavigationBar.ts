import { Page, Locator } from '@playwright/test';

export class NavigationBar {
    private page: Page;
    private homeButton: Locator;
    private contactButton: Locator;
    private aboutButton: Locator;
    private cartButton: Locator;
    private loginButton: Locator;
    private logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeButton = page.locator('#navbar-home');
        this.contactButton = page.locator('#navbar-contact');
        this.aboutButton = page.locator('#navbar-about');
        this.cartButton = page.locator('#navbar-cart');
        this.loginButton = page.locator('#login2');
        this.logoutButton = page.locator('#logout2');
    }

    async goToHome() {
        await this.homeButton.click();
    }

    async goToCart() {
        await this.cartButton.click();
    }

    async login() {
        await this.loginButton.click();
    }

    async logout() {
        await this.logoutButton.click();
    }
}
