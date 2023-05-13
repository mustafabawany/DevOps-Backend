const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

(async function example() {
  let driver = await new Builder().forBrowser('MicrosoftEdge').build();
  try {
    await driver.get('http://localhost:4000/compose');

    // Test addition
    await driver.findElement(By.name('postTitle')).sendKeys('Test Title');
    await driver.findElement(By.name('postBody')).sendKeys('Test Body');
    await driver.findElement(By.css('button[type="submit"]')).click();

    const postTitle = await driver.findElement(By.id('postTitle')).getText();

    assert.strictEqual(postTitle, 'Test Title');

    console.log('All tests passed!');
  } finally {
    await driver.quit();
  }
})();