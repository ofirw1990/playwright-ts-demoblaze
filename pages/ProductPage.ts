import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class ProductPage extends BasePage {

    private productNameLocator: Locator;
    private productPriceLocator: Locator;
    private addToCartButton: Locator;
    protected expectedUrl: string;


    constructor(page: Page) {
        super(page);
        this.productNameLocator = this.page.locator('#tbodyid > .name');
        this.productPriceLocator = this.page.locator('#tbodyid > .price-container');
        this.addToCartButton = this.page.locator('#tbodyid > div.row > div > a');
    }

    public async getProductName(): Promise<string> {
        return await this.productNameLocator.innerText();
    }

    public async getProductPrice(): Promise<string> {
        let allPriceDetails = await this.productPriceLocator.innerText();
        let onlyNumbers = allPriceDetails.replace(/\D/g, ""); // שומר רק על מספרים
        return onlyNumbers;
    }
    

    public async addToCart(): Promise<void> {
        await this.addToCartButton.click();
    }
}
