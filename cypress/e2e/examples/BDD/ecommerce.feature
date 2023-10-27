Feature: End to End Ecommerce Validation 

    Application Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add item to cart
    And validate the total prices
    Then Select the country submit and verify thankyou

    Scenario: Filling the form to open Shop Page
    Given I open Ecommerce Page
    When I fill the forms details
    And validate the forms behaviour
    Then Select the shop Page