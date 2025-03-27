import { test, expect } from "@playwright/test";
import HomePage from "../pages/HomePage";
import { ContactModalComponent } from "../components/ContactModalComponent";
import CartPage from "../pages/CartPage";
import ProductPage from "../pages/ProductPage";

test.describe("Sending message process", () => {
    test("Sending message with valid details", async ({ page }) => {
        let alertText = "";

        page.on("dialog", async (dialog) => {
            alertText = dialog.message();
            await page.waitForTimeout(2000);
            await dialog.dismiss();
        });

        const homePage = new HomePage(page);
        await homePage.gotoHomePage();

        await homePage.openContactModal();
        const contactModal = new ContactModalComponent(page);

        await contactModal.fillDetailsAndSendMessage("ofir", "user@example.com", "hey");
        expect(alertText).toContain("Thanks");
    });
});

test.describe("Making an order process", () => {
    test("Adding products to the cart and paying for them", async ({ page }) => {
        page.on("dialog", async (dialog) => {
            await page.waitForTimeout(2000);
            await dialog.dismiss();
        });

        const homePage = new HomePage(page);
        await homePage.gotoHomePage();

        await homePage.selectFirstProduct();
        const productPage = new ProductPage(page);
        let productName = await productPage.getProductName();
        let productPrice = await productPage.getProductPrice();
        await productPage.addToCart();
    });
});
