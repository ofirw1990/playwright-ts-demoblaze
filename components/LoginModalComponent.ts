import { Page } from "@playwright/test";
import { BaseModalComponenet } from "./BaseModalComponent";

export class LoginModalComponent extends BaseModalComponenet {
    protected titleSelector = "//h5[@id='logInModalLabel']";
    protected closeButtonSelector = "//h5[@id='logInModalLabel']/../button";
    protected expectedTitle = "Log in";

    constructor(page: Page) {
        super(page);
    }
}