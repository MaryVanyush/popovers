import puppeteer from "puppeteer";

describe("popover test", () => {
  let browser;
  let page;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });
  test("button-popover should render on page", async () => {
    await page.goto("http://localhost:8080");
    await page.waitForSelector(".btn-popover");
  });

  test("popover opening test", async () => {
    await page.goto("http://localhost:8080");

    const btn = await page.$(".btn-popover_red");
    await btn.click();

    await page.waitForSelector(".popover");
    await btn.click();
    await page.waitForSelector(".popover", { hidden: true });
  });

  afterEach(async () => {
    await browser.close();
  });
});
