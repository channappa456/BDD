Feature: OrangeHRM Login

@Smoke
Scenario: Test Verify OrangeHRM Login

    Given open the firefox browser
    Given navigate app url
    When enter the username "Haran"
    When enter the password "Charvika@143"
    When click on login
    Then verify welcomePage
    When close the browser