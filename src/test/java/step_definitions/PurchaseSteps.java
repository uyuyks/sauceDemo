package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en_scouse.An;
import gherkin.lexer.Th;
import org.example.pageObject.LoginPage;
import org.example.pageObject.inventoryPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class PurchaseSteps {
    private WebDriver webDriver;
    public PurchaseSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @And("User sort product list by name z to a")
    public void selectProductContainer() throws InterruptedException {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        String a = "Name (Z to A)";
        inventoryPage.selectProductContainer(a);
    }


    @And("User pick item Sauce Labs Onesie")
    public void clickItemBasket1() throws InterruptedException {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        inventoryPage.clickBase1();
    }

    @And("User pick item Test.allTheThings T-Shirt Red")
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

    @And("User Remove item Test.allTheThings T-Shirt Red")
    public void removeItemATT() throws InterruptedException{
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        inventoryPage.clickRemoveATT();
        Thread.sleep(3000);
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


    @Then("User already on landing page")
    public void verifyLandingPage(){
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        Assert.assertTrue(inventoryPage.displayLandingPage());
    }

    @Then("log item name")
    public void logItemName() {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        System.out.println(inventoryPage.getItemNameTest());
        System.out.println(inventoryPage.getItemNameOneSie());
    }

    @Then("Verify item name")
    public void verifyItemName() {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        String itemNameOne = inventoryPage.getItemNameOneSie();
        String itemNameTest = inventoryPage.getItemNameTest();
        Assert.assertEquals(itemNameTest, "Test.allTheThings() T-Shirt (Red)");
        Assert.assertEquals(itemNameOne, "Sauce Labs Onesie");
    }

    @Then("log total price")
    public void logTotalPrice() {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        System.out.println(inventoryPage.getTotalPrice());
    }

    @Then("User on checkOut page")
    public void isOnSummaryPage() {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        Assert.assertTrue(inventoryPage.isCheckoutDisplayed());
    }

    @Then("Verify finish page")
    public void isOnFinishPage() {
        inventoryPage inventoryPage = new inventoryPage(webDriver);
        Assert.assertTrue(inventoryPage.isFinishDisplayed());
    }
}
