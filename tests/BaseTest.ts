import { test, Page, Browser, BrowserContext } from '@playwright/test';
import HomePage from '../pages/HomePage';

export class BaseTest {
  protected page: Page;
  protected browser: Browser;
  protected context: BrowserContext;

  constructor(page: Page) {
    this.page = page;
  }

  public async setup() {
    const homePage = new HomePage(this.page);
    await homePage.gotoHomePage();
  }

  public async teardown() {
    await this.page.close();
  }
}
