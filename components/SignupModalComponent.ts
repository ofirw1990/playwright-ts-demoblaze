import { Page } from "@playwright/test";
import { BaseModalComponenet } from "./BaseModalComponent";

export class SignupModalComponent extends BaseModalComponenet {
    protected titleSelector = "//h5[@id='signInModalLabel']";
    protected closeButtonSelector = "//h5[@id='signInModalLabel']/../button";
    protected expectedTitle = "Sign up";

    constructor(page: Page) {
        super(page);
    }
}