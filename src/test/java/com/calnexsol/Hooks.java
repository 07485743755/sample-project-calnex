package com.calnexsol;

import com.calnexsol.basepage.BasePage;
import com.calnexsol.propertyreader.PropertyReader;
import com.calnexsol.utility.Utility;
import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class  Hooks extends BasePage {

    @Before
    public void openBrowser(){
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
        Reporter.assignAuthor("Calnex","Nidhi Lathiya");
    }

    @After
    public void tearDown(Scenario scenario){

        if(scenario.isFailed()){
        String screenShotPath= Utility.getScreenshot(driver,scenario.getName().replace(" ","_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        closeBrowser();
    }

}
