import { test, expect } from "@playwright/test";
import HomePage from "../pages/HomePage";
import { ContactModalComponent } from "../components/ContactModalComponent";

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