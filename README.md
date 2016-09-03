A playground for WebdriverJS and Selenium with Node

https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver
http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/
http://www.seleniumhq.org/projects/webdriver/


$brew install chromedriver
==> Downloading https://chromedriver.storage.googleapis.com/2.21/chromedriver_ma
######################################################################## 100.0%
Error: Failed to install plist file
Error: The `brew link` step did not complete successfully
The formula built, but is not symlinked into /usr/local
Could not symlink bin/chromedriver
/usr/local/bin is not writable.



You can try again using:
  brew link chromedriver

$sudo brew link chromedriver
Linking /usr/local/Cellar/chromedriver/2.21... 1 symlinks created


Failures:

  1) basic test should be on correct page
   Message:
     timeout: timed out after 5000 msec waiting for spec to complete
   Stacktrace:
     undefined

Finished in 5.92 seconds
1 test, 1 assertion, 1 failure, 0 skipped

it('takes more than 5 seconds', function() { // test here }, 10000);

https://github.com/angular/protractor/issues/27

$ ./node_modules/jasmine-node/bin/jasmine-node src/example.js


Finished in 0.001 seconds
0 tests, 0 assertions, 0 failures, 0 skipped

Try jasmine-node --matchall testfile.js or jasmine-node testfile.spec.js, by default jasmine-node searches for files containing "spec" in file name

./node_modules/jasmine-node/bin/jasmine-node --matchall  src/example.js
