@Login
Feature: Login
  AS a user i want to login to website sauce demo

  Scenario: Normal login
    Given user open the website sauce demo
    When user input "standard_user" as userName and input "secret_sauce" as password

  Scenario Outline: Invalid login
    Given user open the website sauce demo
    When user input "<userName>" as userName and input "<password>" as password
    Then User see error "<errorMessages>" as errorText in login page
  Examples:
    | userName | password | errorMessages                                                              |
    | nurul    | 123      | Epic sadface: Username and password do not match any user in this services |
    | nurul    |          | Epic sadface: Password is required                                         |
    |          | 123      | Epic sadface: Username is required                                         |