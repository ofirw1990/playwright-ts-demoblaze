import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';

test.describe('NavigationBar buttons', () => {
  
    test('Clicking on the cart and home buttons navigates to the correct pages', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.gotoHomePage();
        
        await homePage.navigateToCartPage();
        const cartPage = new CartPage(page);
        await cartPage.validatePageUrl();
        
        await cartPage.navigateToHomePage();
        await homePage.validatePageUrl();

        await homePage.openContactModal();
        await homePage.validateModalTitle();
        await homePage.closeModal();

        await homePage.openAboutModal();
        await homePage.validateModalTitle();
        await homePage.closeModal();

        await homePage.openLoginModal();
        await homePage.validateModalTitle();
        await homePage.closeModal();

        await homePage.openSignUpModal();
        await homePage.validateModalTitle();
        await homePage.closeModal();
        });
});
