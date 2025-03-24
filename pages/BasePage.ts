import { expect, Page } from "@playwright/test";

export abstract class BasePage {


    constructor(protected page : Page , protected url : string) {
    }

    public async validatePageUrl(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }
}