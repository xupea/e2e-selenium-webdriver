var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

describe('basic test', function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 9999999

	it('should be on correct page', function (done) {
		driver.get('http://www.wingify.com');
		driver.getTitle().then(function(title) {
			expect(title).toBe('Wingify2s');
			// Jasmine waits for the done callback to be called before proceeding to next specification.
			done();
		});
	}, 100000);
});
