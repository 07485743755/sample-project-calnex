$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/homepageTabManu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Tab Menu Test",
  "description": "As a user I want to navigate to top menu tab of homepage of Calnex website",
  "id": "top-tab-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3591855000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to top menu tab page successfully",
  "description": "",
  "id": "top-tab-menu-test;user-should-navigate-to-top-menu-tab-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on contact tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am able to navigate to selected tab page successfully with \"your queries answered\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 86084900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnContactTab()"
});
formatter.result({
  "duration": 858652600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "your queries answered",
      "offset": 62
    }
  ],
  "location": "MyStepdefs.iAmAbleToNavigateToSelectedTabPageSuccessfullyWith(String)"
});
formatter.result({
  "duration": 636175700,
  "status": "passed"
});
formatter.after({
  "duration": 621416900,
  "status": "passed"
});
formatter.before({
  "duration": 2815594100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should able to submit contact information successfully",
  "description": "",
  "id": "top-tab-menu-test;user-should-able-to-submit-contact-information-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter first name \"Harry\" in first name field",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter last name \"Potter\" in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter email (user name \"harry\" and Domain\"@gmail.com\") in email field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter company name \"Harry Potter\" in company name field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I check agreement check box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am able to submit contact details successfully with confirmation text \"Thank you for contacting Calnex Solutions.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnContactPage()"
});
formatter.result({
  "duration": 825015100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.iEnterFirstNameInFirstNameField(String)"
});
formatter.result({
  "duration": 200543500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Potter",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterLastNameInLastNameField(String)"
});
formatter.result({
  "duration": 146223500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harry",
      "offset": 26
    },
    {
      "val": "@gmail.com",
      "offset": 44
    }
  ],
  "location": "MyStepdefs.iEnterEmailUserNameAndDomainInEmailField(String,String)"
});
formatter.result({
  "duration": 125899400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iEnterCompanyNameInCompanyNameField(String)"
});
formatter.result({
  "duration": 104391500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iCheckAgreementCheckBox()"
});
formatter.result({
  "duration": 166190100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 642827400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for contacting Calnex Solutions.",
      "offset": 73
    }
  ],
  "location": "MyStepdefs.iAmAbleToSubmitContactDetailsSuccessfullyWithConfirmationText(String)"
});
formatter.result({
  "duration": 20136140900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[contains(text(),\u0027Thank you for contacting Calnex Solutions.\u0027)]\"}\n  (Session info: chrome\u003d93.0.4577.82)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7FSFVSR\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.82, chrome: {chromedriverVersion: 92.0.4515.43 (8c61b7e2989f2..., userDataDir: C:\\Users\\Nidhi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53147}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 882dde4e85fe7b7d5ba55823735070ce\n*** Element info: {Using\u003dxpath, value\u003d//p[contains(text(),\u0027Thank you for contacting Calnex Solutions.\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.calnexsol.utility.Utility.getTextFromElement(Utility.java:51)\r\n\tat com.calnexsol.pages.ContactPage.getConfirmationTxt(ContactPage.java:86)\r\n\tat com.calnexsol.stepdefs.MyStepdefs.iAmAbleToSubmitContactDetailsSuccessfullyWithConfirmationText(MyStepdefs.java:77)\r\n\tat ✽.Then I am able to submit contact details successfully with confirmation text \"Thank you for contacting Calnex Solutions.\"(src/test/java/resources/featureFile/homepageTabManu.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1225367200,
  "status": "passed"
});
});