
Feature: OrangeHRM Login

@Smoke
Scenario: Verify OrangeHRM Login

    Given open the firefox browser
    Given navigate app url
    When enter the username "Haran"
    When enter the password "Charvika@143"
    When click on login
    Then verify welcomePage
    When close the browser


       
      @Regression
      Scenario Outline: Retest on OrangeHRM Login

              Given open the firefox browser
              Given navigate app url
              When enter the username "<username>"
              When enter the password "<password>"
              When click on login
              Then verify welcomePage
              When close the browser
              
Examples:

     |username|password|
     |Haran|Charvika@143|
     |username|Charvika@143|
     |Haran|password|
     |username123|password|
























































































