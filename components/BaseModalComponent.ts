import { expect, Page } from "@playwright/test";

export abstract class BaseModalComponenet {
    protected abstract titleSelector: string;
    protected abstract closeButtonSelector: string;
    protected abstract expectedTitle: string;

    constructor(protected page: Page) {}

    public async validateModalTitle() {
        await expect(this.page.locator(this.titleSelector)).toHaveText(this.expectedTitle);
    }

    public async closeModal() {
        await this.page.locator(this.closeButtonSelector).click();
    }
}

// export class ModalComponent {
//     private titleSelector = "//h5[contains(@id,'ModalLabel')]";
//     private closeButtonSelector = "#exampleModal >div span";

//     constructor(private page: Page , private expectedTitle: string) {
//         this.titleSelector = `${this.titleSelector}[contains(text(), '${expectedTitle}')]`;
//     }

//     public async validateModalTitle() {
//         const title = await this.page.locator(this.titleSelector).textContent();
//         expect(title?.trim()).toBe(this.expectedTitle);
//     }

//     public async closeModal() {
//         await this.page.locator(this.closeButtonSelector).click();
//     }
// }
