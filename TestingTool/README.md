## Selenium WebdriverJS & Mocha Template with Page Object Model

### How to use?
Create the Page Objects of your Web application under **_pages_** package, call those Page Objects in Webdriverjs tests under **_tests_** package (Sample Page Objects, testcase included in this template)

### How to run?
To install the dependencies issue the below commands in project root directory
```javascript
npm install
``` 
To run the tests issue the below command
```javascript
npm test
``` 
By default it runs in Chrome browser, you can specify which browser to use as well

On linux:
```javascript
BROWSER=firefox npm test
```

On Powershell:
```javascript
$env:BROWSER='firefox';npm test
```

Browsers added in this template are 
* chrome
* firefox
* edge
* opera
* ie
