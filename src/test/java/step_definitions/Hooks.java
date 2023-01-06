package step_definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Hooks {
    public static WebDriver webDriver;
    public String windows = "\\driver\\chromedriver.exe";
    public String mac = "/driver/chromedriver";
    public String linux = "/driver/chromedriverlinux";

    @Before
    public void openBrowser(){
        System.setProperty("webdriver.chrome.driver",
                System.getProperty("user.dir") + mac);

        WebDriver driver = new ChromeDriver();
        webDriver = driver;
        String appUrl = "https://www.saucedemo.com/";
        driver.get(appUrl);
        driver.manage().window().maximize();
    }

    @After
    public void closeBrowser(){
        webDriver.quit();
    }

}
