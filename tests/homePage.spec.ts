import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import Products from '../data/products.json';

test.describe('Product filter buttons', () => {
  const filterCategories = ['phones', 'laptops', 'monitors'];

  filterCategories.forEach((category) => {
    test(`should filter products by ${category}`, async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.gotoHomePage();

      // select category filter
      await homePage.selectCategoryFilter(category);
      await page.waitForFunction(
      (expectedCount) => document.querySelectorAll('.hrefch').length === expectedCount,
        Products[category].length
);


      // Get the expected products for the category from the JSON file
      const expectedProducts = Products[category];

      // Verify the product names displayed match the expected list
      const productNames = await homePage.getProductNames();
      expect(productNames).toEqual(expectedProducts);
    });
  });
});
