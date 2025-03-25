import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class CartPage extends BasePage {

    constructor(page: Page) {
        super(page,"https://www.demoblaze.com/cart.html");
    }
}