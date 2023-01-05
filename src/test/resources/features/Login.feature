@Login
Feature: Login
  AS a user i want to login to website sauce demo

  Scenario: Normal login
    Given user open the website sauce demo
    When user input "standard_user" as userName and input "secret_sauce" as password
