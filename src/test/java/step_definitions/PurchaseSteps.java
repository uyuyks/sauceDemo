package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en_scouse.An;
import gherkin.lexer.Th;
import org.example.pageObject.LoginPage;
import org.example.pageObject.inventoryPage;
import org.openqa.selenium.WebDriver;

public class PurchaseSteps {
    private WebDriver webDriver;
    public PurchaseSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @And("User pick item Sauce Labs Fleece Jacket")
    public void clickItemBasket1() throws InterruptedException {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        inventoryPage.clickBase1();
    }

    @And("User pick item Sauce Labs Onesie")
    public void clickItemBasket2() throws InterruptedException {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        inventoryPage.clickBase2();
    }

    @And("User Click button \"Shopping Cart Badge\"")
    public void clickCartButton() throws InterruptedException {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        inventoryPage.clickCart();
        Thread.sleep(5000);
    }

    @And("User Click button \"Checkout\"")
    public void clickCheckoutButton() throws InterruptedException {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        inventoryPage.clickCheckout();
        Thread.sleep(5000);
    }

    @And("User input \"first-name\" and input \"last-name\"")
    public void setFirstAndLastName() throws InterruptedException {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        inventoryPage.setFirstName("Nurul");
        inventoryPage.setLastName("Uyuy");
    }

    @And("User input \"postal-code\"")
    public void setPostalCode() throws InterruptedException {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        inventoryPage.setPostalCode("15560");
    }

    @And("User Click button \"Continue\"")
    public void clickContinueButton() throws InterruptedException {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        inventoryPage.clickContinue();
        Thread.sleep(5000);
    }

    @And("User Click button \"Finish\"")
    public void clickFinishButton() throws InterruptedException {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        inventoryPage.clickFinish();
        Thread.sleep(5000);
    }
}
