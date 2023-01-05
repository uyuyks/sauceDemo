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
  "duration": 3790162178,
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
  "name": "User Remove item Test.allTheThings T-Shirt Red",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User Click button \"Checkout\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User input \"first-name\" and input \"last-name\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User input \"postal-code\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User Click button \"Continue\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Click button \"Finish\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 304268476,
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
  "duration": 413501455,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 56645316,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.selectProductContainer()"
});
formatter.result({
  "duration": 138882520,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket1()"
});
formatter.result({
  "duration": 59163559,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket2()"
});
formatter.result({
  "duration": 69977104,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickCartButton()"
});
formatter.result({
  "duration": 5080078624,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.removeItemATT()"
});
formatter.result({
  "duration": 3107903398,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickCheckoutButton()"
});
formatter.result({
  "duration": 5097410945,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.setFirstAndLastName()"
});
formatter.result({
  "duration": 213867686,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.setPostalCode()"
});
formatter.result({
  "duration": 108975657,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickContinueButton()"
});
formatter.result({
  "duration": 5091775863,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickFinishButton()"
});
formatter.result({
  "duration": 5096185907,
  "status": "passed"
});
formatter.after({
  "duration": 127921655,
  "status": "passed"
});
formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "AS a user i want to login to website sauce demo",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 2154006492,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Normal login",
  "description": "",
  "id": "login;normal-login",
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
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 122246338,
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
  "duration": 792654166,
  "status": "passed"
});
formatter.after({
  "duration": 114886954,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user input \"\u003cuserName\u003e\" as userName and input \"\u003cpassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User see error \"\u003cerrorMessages\u003e\" as errorText in login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login;invalid-login;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorMessages"
      ],
      "line": 14,
      "id": "login;invalid-login;;1"
    },
    {
      "cells": [
        "nurul",
        "123",
        "Epic sadface: Username and password do not match any user in this services"
      ],
      "line": 15,
      "id": "login;invalid-login;;2"
    },
    {
      "cells": [
        "nurul",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 16,
      "id": "login;invalid-login;;3"
    },
    {
      "cells": [
        "",
        "123",
        "Epic sadface: Username is required"
      ],
      "line": 17,
      "id": "login;invalid-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1623093505,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user input \"nurul\" as userName and input \"123\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User see error \"Epic sadface: Username and password do not match any user in this services\" as errorText in login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 65771949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nurul",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 42
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 403614817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this services",
      "offset": 16
    }
  ],
  "location": "LoginSteps.errorText(String)"
});
formatter.result({
  "duration": 384275,
  "status": "passed"
});
formatter.after({
  "duration": 118029052,
  "status": "passed"
});
formatter.before({
  "duration": 2047934248,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user input \"nurul\" as userName and input \"\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User see error \"Epic sadface: Password is required\" as errorText in login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 94992791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nurul",
      "offset": 12
    },
    {
      "val": "",
      "offset": 42
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 408159471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 16
    }
  ],
  "location": "LoginSteps.errorText(String)"
});
formatter.result({
  "duration": 505833,
  "status": "passed"
});
formatter.after({
  "duration": 115544038,
  "status": "passed"
});
formatter.before({
  "duration": 1813144577,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user input \"\" as userName and input \"123\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User see error \"Epic sadface: Username is required\" as errorText in login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 63494918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 37
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 350714752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 16
    }
  ],
  "location": "LoginSteps.errorText(String)"
});
formatter.result({
  "duration": 410796,
  "status": "passed"
});
formatter.after({
  "duration": 107043672,
  "status": "passed"
});
});