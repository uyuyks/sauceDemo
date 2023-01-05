@CheckOut
  Feature: CheckOut
    description feature

    Scenario: Normal login
      Given user open the website sauce demo
      When user input "standard_user" as userName and input "secret_sauce" as password
      And User pick item Sauce Labs Fleece Jacket
      And User pick item Sauce Labs Onesie
      And User Click button "Shopping Cart Badge"
      And User Click button "Checkout"
      And User input "first-name" and input "last-name"
      And User input "postal-code"
      And User Click button "Continue"
      And User Click button "Finish"
