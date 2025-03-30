import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class CartPage extends BasePage {
    protected expectedUrl = "https://www.demoblaze.com/cart.html";
    private productNameLocator: Locator;
    private productPriceLocator: Locator;
    private placeOrderButton: Locator

    constructor(page: Page) {
        super(page);
        this.productNameLocator = this.page.locator('#tbodyid > tr > td:nth-child(2)');
        this.productPriceLocator = this.page.locator('#tbodyid > tr > td:nth-child(3)');
        this.placeOrderButton = this.page.locator('#page-wrapper div.col-lg-1 > button');
    }

    public async validateProductDetails(expectedProductName: string, expectedProductPrice: string) {
        const actualProductName = await this.productNameLocator.textContent();
        const actualProductPrice = await this.productPriceLocator.textContent();
    
        expect(actualProductName?.trim()).toBe(expectedProductName);
        expect(actualProductPrice?.trim()).toBe(expectedProductPrice);
    }

    public async clickPlaceOrderButton() {
        await this.placeOrderButton.click();
    }

    public async fillDetails() {
        
    }
    
}