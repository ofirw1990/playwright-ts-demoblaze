import { expect, Page } from "@playwright/test";
import { NavigationBar } from "../components/NavigationBar";

export abstract class BasePage {
    
    protected navigationBar: NavigationBar;

    constructor(protected page : Page , protected url : string) {
        this.navigationBar = new NavigationBar(page);
    }

    public async validatePageUrl(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    public async navigateTo(url: string) {
        await this.page.goto(url);
    }

    public async navigateToHomePage() {
        await this.navigationBar.clickHomeButton();
    }

    public async openContactModal() {
        await this.navigationBar.clickContactButton();
    }

    public async openAboutModal() {
        await this.navigationBar.clickAboutButton();
    }

    public async navigateToCartPage() {
        await this.navigationBar.clickCartButton();
    }

    public async openLoginModal() {
        await this.navigationBar.clickLogInButton();
    }
    
    public async openSignUpModal() {
        await this.navigationBar.clickSignUpButton();
    }
}