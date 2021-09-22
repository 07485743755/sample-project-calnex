package com.calnexsol.pages;

import com.calnexsol.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ContactPage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//span[@style='font-size: 18pt; font-weight: 100;']")
    WebElement welcomeTxt;

    @FindBy(xpath = "//input[@name='First Name']")
    WebElement firstNameField;

    @FindBy(xpath = "//input[@name='Last Name']")
    WebElement lastNameField;

    @FindBy(xpath = "//input[@name='Email']")
    WebElement emailField;

    @FindBy(xpath = "//input[@name='Company']")
    WebElement companyField;

    @FindBy(xpath = "(//input[@name='Privacy/Newsletter'])[1]")
    WebElement checkBoxAgree;

    @FindBy(xpath = "//body/div[@id='rt-transition']/div[@id='rt-mainbody-surround']/div[@id='rt-utility']/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/div[1]/div[3]/div[1]/div[1]/label[1]/input[1]")
    WebElement reCaptcha;

    @FindBy(xpath = "//button[contains(text(),'Submit')]")
    WebElement submitButton;

    @FindBy(xpath = "//p[contains(text(),'Thank you for contacting Calnex Solutions.')]")
    WebElement confirmationTxt;


    public String getWelcomeTxt(){

        log.info("Getting text from : "+welcomeTxt.toString());
        return getTextFromElement(welcomeTxt);
    }

    public void enterFirstName(String firstName){

        log.info("Enter first name : "+firstName+" in first name field : "+firstNameField.toString());
        sendTextToElement(firstNameField,firstName);
    }

    public void enterLastName(String lastName){

        log.info("Enter last name : "+lastName+" in last name field : "+lastNameField.toString());
        sendTextToElement(lastNameField,lastName);
    }

    public void enterEmail(String email){

        log.info("Enter email id : "+email+" in email field : "+emailField.toString());
        sendTextToElement(emailField,email);
    }

    public void enterCompanyName(String companyName){

        log.info("Enter company name : "+companyName+" in company name field : "+companyField.toString());
        sendTextToElement(companyField,companyName);
    }

    public void setCheckBoxAgree(){

        log.info("Clicking on agree check box : "+checkBoxAgree.toString());
        clickOnElement(checkBoxAgree);
    }

    public void clickSubmitBtn(){

        log.info("Clicking on submit button : "+ submitButton.toString());
        clickOnElement(submitButton);
    }

    public String getConfirmationTxt(){

        log.info("Getting confirmation text : " + confirmationTxt.toString());
        return getTextFromElement(confirmationTxt);
    }
}
