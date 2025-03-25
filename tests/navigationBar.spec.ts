import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';

test.describe('NavigationBar buttons', () => {
  
    test('Clicking on the cart and home buttons navigates to the correct pages', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.gotoHomePage();
        

        await homePage.navigateToCartPage();
        const cartPage = new CartPage(page);
        await cartPage.validatePageUrl("https://www.demoblaze.com/cart.html");
        
        await cartPage.navigateToHomePage();
        await homePage.validatePageUrl("https://www.demoblaze.com/index.html");
        
    });

});

