import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { UserDetails } from "../interfaces/UserDetails";

export default class CartPage extends BasePage {
    protected expectedUrl = "https://www.demoblaze.com/cart.html";
    private productNameLocator: Locator;
    private productPriceLocator: Locator;
    private placeOrderButton: Locator;

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

    public async fillDetails(user: UserDetails) {
        await this.page.fill('#name', user.name);
        await this.page.fill('#country', user.country);
        await this.page.fill('#city', user.city);
        await this.page.fill('#card', user.creditCard);
        await this.page.fill('#month', user.month);
        await this.page.fill('#year', user.year);
    }

    public async clickPurchaseButton() {
        const purchaseButton = this.page.locator('#orderModal button.btn.btn-primary');
        await purchaseButton.click();
    }
    
    public async getPurchaseSummaryDetails(): Promise<Map<string, string>> {
        const summaryLocator = this.page.locator("div.sweet-alert p");
        const summaryText = await summaryLocator.innerText();
    
        const detailsMap = new Map<string, string>();
    
        summaryText.split("\n").forEach(line => {
            const parts = line.split(":");
            const key = parts[0].trim();
            const value = parts[1].trim();
            detailsMap.set(key, value);
        });
    
        return detailsMap;
    }
    
    
    public async validatePurchaseDetails(expectedAmount: string, expectedCardNumber: string,expectedName: string) {
        const summaryDetails = await this.getPurchaseSummaryDetails();

        expect(summaryDetails.get("Amount")?.replace(/\D/g, "")).toBe(expectedAmount);
        expect(summaryDetails.get("Card Number")).toBe(expectedCardNumber);
        expect(summaryDetails.get("Name")).toBe(expectedName);
    }

    
}