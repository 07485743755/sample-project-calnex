package com.calnexsol.pages;

import com.calnexsol.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;

import java.util.List;


public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "(//span[contains(text(),'Contact')])[1]")
    WebElement contactTab;

    @FindBys({@FindBy( xpath = "//ul[@class=' maximenuck']//li")})
    List<WebElement> homePageMenuTabs;

    public void selectMenu(String menu) {

        for (WebElement element : homePageMenuTabs) {
            log.info("Getting text from element : "+element.toString()+"Compare it with "+menu);
            if (element.getText().equalsIgnoreCase(menu)) {
                log.info("Clicking on element: "+element.toString());
                element.click();
                break;
            }
        }
    }

    public void selectContactTab(){

        log.info("Clicking on contact tab : "+contactTab.toString());
        clickOnElement(contactTab);
    }

}
