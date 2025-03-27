import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class HomePage extends BasePage {

    private filterPhones: Locator;
    private filterLaptops: Locator;
    private filterMonitors: Locator;
    protected expectedUrl = "https://www.demoblaze.com/index.html";

    constructor(page: Page) {
        super(page);
        this.filterPhones = this.page.locator('text=Phones');
        this.filterLaptops = this.page.locator('text=Laptops');
        this.filterMonitors = this.page.locator('text=Monitors');
    }

    public async gotoHomePage() {
        await this.navigateTo(this.expectedUrl);
    }

    public async selectCategoryFilter(category: string) {
        if (category === 'phones') {
            await this.filterPhones.click();
        } else if (category === 'laptops') {
            await this.filterLaptops.click();
        } else if (category === 'monitors') {
            await this.filterMonitors.click();
        }
    }
    
    public async getProductNames(): Promise<string[]> {
        await this.page.waitForSelector('a.hrefch', { state: 'attached' });
        return await this.page.locator('.hrefch').allInnerTexts();
    }
}