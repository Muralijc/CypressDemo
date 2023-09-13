Feature: Verify the katalon shop cart user journey

    Scenario: Verify the Katalon Shop cart by adding random items, delete the loweset price item and verify the reflections
        Given I add four random items to my cart
        When I view my cart
        Then I find total four items listed in my cart
        When I search for lowest price items
        And I am able to remove the lowest price items from my cart
        Then I am able to verify three items in my cart
