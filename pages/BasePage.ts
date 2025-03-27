import { expect, Page } from "@playwright/test";
import { NavigationBar } from "../components/NavigationBar";
import { BaseModalComponenet } from "../components/BaseModalComponent";
import { ContactModalComponent } from "../components/ContactModalComponent";
import { AboutModalComponent } from "../components/AboutModalComponent";
import { LoginModalComponent } from "../components/LoginModalComponent";
import { SignupModalComponent } from "../components/SignupModalComponent";

export abstract class BasePage {
    
    protected navigationBar: NavigationBar;
    protected modal?: BaseModalComponenet;
    protected abstract expectedUrl: string;

    constructor(protected page : Page) {
        this.navigationBar = new NavigationBar(page);
    }

    public async validatePageUrl() {
        await expect(this.page).toHaveURL(this.expectedUrl);
    }

    public async navigateTo(url: string) {
        await this.page.goto(url);
    }

    public async navigateToHomePage() {
        await this.navigationBar.clickHomeButton();
    }

    public async openContactModal() {
        await this.navigationBar.clickContactButton();
        this.modal = new ContactModalComponent(this.page);
    }

    public async openAboutModal() {
        await this.navigationBar.clickAboutButton();
        this.modal = new AboutModalComponent(this.page);
    }

    public async navigateToCartPage() {
        await this.navigationBar.clickCartButton();
    }

    public async openLoginModal() {
        await this.navigationBar.clickLogInButton();
        this.modal = new LoginModalComponent(this.page);
    }
    
    public async openSignUpModal() {
        await this.navigationBar.clickSignUpButton();
        this.modal = new SignupModalComponent(this.page);
    }

    public async validateModalTitle() {
        await this.modal?.validateModalTitle();
    }
    
    public async closeModal() {
        await this.modal?.closeModal();
    }
}