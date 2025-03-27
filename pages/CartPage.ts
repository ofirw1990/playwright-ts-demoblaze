import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class CartPage extends BasePage {
    protected expectedUrl = "https://www.demoblaze.com/cart.html";

    constructor(page: Page) {
        super(page);
    }
}