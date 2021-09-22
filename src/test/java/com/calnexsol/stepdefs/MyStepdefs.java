package com.calnexsol.stepdefs;

import com.calnexsol.pages.ContactPage;
import com.calnexsol.pages.HomePage;
import com.calnexsol.utility.Utility;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on contact tab$")
    public void iClickOnContactTab() {

        new HomePage().selectContactTab();
    }

    @Then("^I am able to navigate to selected tab page successfully with \"([^\"]*)\"$")
    public void iAmAbleToNavigateToSelectedTabPageSuccessfullyWith(String expectedTxt) throws InterruptedException {

        Thread.sleep(500);
        Assert.assertEquals(expectedTxt,new ContactPage().getWelcomeTxt());
    }

    @Given("^I am on contact page$")
    public void iAmOnContactPage() {

        new HomePage().selectContactTab();
    }

    @When("^I enter first name \"([^\"]*)\" in first name field$")
    public void iEnterFirstNameInFirstNameField(String firstName) {

        new ContactPage().enterFirstName(firstName);
    }

    @And("^I enter last name \"([^\"]*)\" in last name field$")
    public void iEnterLastNameInLastNameField(String lastName) {

        new ContactPage().enterLastName(lastName);
    }

    @And("^I enter email \\(user name \"([^\"]*)\" and Domain\"([^\"]*)\"\\) in email field$")
    public void iEnterEmailUserNameAndDomainInEmailField(String userName, String domain) {

        String email=userName+new Utility().generateRandomNumber()+domain;
        new ContactPage().enterEmail(email);
    }

    @And("^I enter company name \"([^\"]*)\" in company name field$")
    public void iEnterCompanyNameInCompanyNameField(String companyName) {

        new ContactPage().enterCompanyName(companyName+new Utility().generateRandomNumber());
    }

    @And("^I check agreement check box$")
    public void iCheckAgreementCheckBox() {

        new ContactPage().setCheckBoxAgree();
    }

    @And("^I click on submit button$")
    public void iClickOnSubmitButton() throws InterruptedException {
        Thread.sleep(500);
        new ContactPage().clickSubmitBtn();
    }

    @Then("^I am able to submit contact details successfully with confirmation text \"([^\"]*)\"$")
    public void iAmAbleToSubmitContactDetailsSuccessfullyWithConfirmationText(String expectedTxt)  {

        Assert.assertEquals(expectedTxt,new ContactPage().getConfirmationTxt());
    }
}
