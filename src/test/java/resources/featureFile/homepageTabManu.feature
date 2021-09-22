Feature: Top Tab Menu Test
  As a user I want to navigate to top menu tab of homepage of Calnex website

  @Smoke
  Scenario: User should navigate to top menu tab page successfully
    Given I am on homepage
    When I click on contact tab
    Then I am able to navigate to selected tab page successfully with "your queries answered"

  @Regression
  Scenario: User should able to submit contact information successfully
    Given I am on contact page
    When  I enter first name "Harry" in first name field
    And   I enter last name "Potter" in last name field
    And   I enter email (user name "harry" and Domain"@gmail.com") in email field
    And   I enter company name "Harry Potter" in company name field
    And   I check agreement check box
    And   I click on submit button
    Then  I am able to submit contact details successfully with confirmation text "Thank you for contacting Calnex Solutions."