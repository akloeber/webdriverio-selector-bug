describe('webdriver.io page', () => {
  it('should support isExisting on element created with object selector', () => {
    browser.url('https://webdriver.io')

    const navSiteEL = browser.execute(function (_sel) {
      return document.querySelector(_sel);
    }, '.nav-site');
    const navSite = $(navSiteEL); // create element from object selector
    console.log(navSite.$$('li')[2].$('a').getText()); // -> correctly logs "Help"
    console.log(navSite.isExisting()); // -> Error: selector needs to be typeof `string` or `function`
  });
});
