Feature: Facebook login functionality
  Scenario: Login with Valid credentials
    Given User is on login page
    When User enters username
    And  User enters password
    And  User clicks on signin button
    Then User logged in successfully
    
    
  Scenario: Login with InValid credentials
    Given User is on login page
    When User enters incorrect username
    And  User enters password
    And  User clicks on signin button
    Then User should not be logged in successfully
 