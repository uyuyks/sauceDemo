package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.example.pageObject.LoginPage;
import org.openqa.selenium.WebDriver;

public class LoginSteps {

    private WebDriver webDriver;

    public LoginSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Given("user open the website sauce demo")
    public void verifyDisplay() throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.isDisplayed();
    }



//    @When("user input\"(.*)\" as userName and input\"(.*)\" as password")
    @When("user input \"(.*)\" as userName and input \"(.*)\" as password")
    public void inputCredential(String userName, String password){
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setUserName(userName);
        loginPage.setPassword(password);
        loginPage.clickLogin();
    }
}
