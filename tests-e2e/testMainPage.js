module.exports = {
  // 'Demo test Google' : function (browser) {
  //   browser
  //     .url('http://www.google.com')
  //     .waitForElementVisible('body', 1000)
  //     .setValue('input[type=text]', 'nightwatch')
  //     .waitForElementVisible('button[name=btnG]', 1000)
  //     .click('button[name=btnG]')
  //     .pause(1000)
  //     .assert.containsText('#main', 'Night Watch')
  //     .end();
  // },
  'Test Main page app' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#root > div > div.col-xs-2 > div > a:nth-child(1)', 1000)
      .click('#root > div > div.col-xs-2 > div > a:nth-child(1)')
      .pause(1000)
      .assert.containsText('#root > div > div.col-xs-10 > ul > li:nth-child(1)', 'Write operations are atomic')
      .end();
  }
}; 