import { Page } from "@playwright/test";
import { BaseModalComponenet } from "./BaseModalComponent";

export class ContactModalComponent extends BaseModalComponenet {
    protected titleSelector = "//h5[@id='exampleModalLabel']";
    protected closeButtonSelector = "//h5[@id='exampleModalLabel']/../button";
    protected expectedTitle = "New message";

    constructor(page: Page) {
        super(page);
    }
}