import { Page } from "@playwright/test";
import { BaseModalComponenet } from "./BaseModalComponent";

export class AboutModalComponent extends BaseModalComponenet {
    protected titleSelector = "//h5[@id='videoModalLabel']";
    protected closeButtonSelector = "//h5[@id='videoModalLabel']/../button";
    protected expectedTitle = "About us";

    constructor(page: Page) {
        super(page);
    }
}