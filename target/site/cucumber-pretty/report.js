$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CheckOut.feature");
formatter.feature({
  "line": 2,
  "name": "CheckOut",
  "description": "description feature",
  "id": "checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CheckOut"
    }
  ]
});
formatter.before({
  "duration": 6654179811,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Normal login",
  "description": "",
  "id": "checkout;normal-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User sort product list by name z to a",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User pick item Sauce Labs Onesie",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User pick item Test.allTheThings T-Shirt Red",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Click button \"Shopping Cart Badge\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "log item name",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify item name",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User Remove item Test.allTheThings T-Shirt Red",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Click button \"Checkout\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User input \"first-name\" and input \"last-name\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User input \"postal-code\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Click button \"Continue\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User on checkOut page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "log total price",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User Click button \"Finish\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify finish page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 930528009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 581695965,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 82872938,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.selectProductContainer()"
});
formatter.result({
  "duration": 379557938,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket1()"
});
formatter.result({
  "duration": 111676797,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket2()"
});
formatter.result({
  "duration": 76116839,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickCartButton()"
});
formatter.result({
  "duration": 5075103447,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.logItemName()"
});
formatter.result({
  "duration": 103165911,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyItemName()"
});
formatter.result({
  "duration": 63614830,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.removeItemATT()"
});
formatter.result({
  "duration": 3059537268,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickCheckoutButton()"
});
formatter.result({
  "duration": 5097557967,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.setFirstAndLastName()"
});
formatter.result({
  "duration": 267662206,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.setPostalCode()"
});
formatter.result({
  "duration": 103834211,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickContinueButton()"
});
formatter.result({
  "duration": 5091135025,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.isOnSummaryPage()"
});
formatter.result({
  "duration": 43266545,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.logTotalPrice()"
});
formatter.result({
  "duration": 34649629,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickFinishButton()"
});
formatter.result({
  "duration": 5088645127,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.isOnFinishPage()"
});
formatter.result({
  "duration": 61497704,
  "status": "passed"
});
formatter.after({
  "duration": 157443834,
  "status": "passed"
});
});