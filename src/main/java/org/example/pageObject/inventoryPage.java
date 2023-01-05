package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class inventoryPage {
    public static WebDriver driver;

    public LoginPage loginPage = new LoginPage(driver);

    public inventoryPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }
//    @FindBy(id = "add-to-cart-sauce-labs-fleece-jacket")
//    @FindBy(id = "add-to-cart-sauce-labs-fleece-jacket")


    @FindBy(id = "add-to-cart-sauce-labs-onesie")
    private WebElement basketItem1;

    @FindBy(xpath = "//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")
    private WebElement basketItem2;

    @FindBy(xpath = "//button[@id='remove-test.allthethings()-t-shirt-(red)']")
    private WebElement btnRemoveItemAllTheThings;

//    @FindBy(xpath = "//button[@class='product_sort_container']")
    @FindBy(className = "product_sort_container")
    private WebElement selectContainer;

    @FindBy(id = "login-button")
    private WebElement btnLogin;

    @FindBy(className = "shopping_cart_link")
    private WebElement cartButton;

    @FindBy(id = "checkout")
    private WebElement checkOutButton;

    @FindBy(id = "first-name")
    private WebElement firstName;

    @FindBy(id = "last-name")
    private WebElement lastName;

    @FindBy(id = "postal-code")
    private WebElement postalCode;

    @FindBy(id = "continue")
    private WebElement continueButton;

    @FindBy(id = "finish")
    private WebElement finishButton;

    @FindBy(xpath = "//span[@class='title']")
    private WebElement title;

    public void clickBase1(){
        basketItem1.click();
    }
    public void clickBase2(){
        basketItem2.click();
    }

    public void selectProductContainer(String sortProductList){
        Select b = new Select (selectContainer);
        b.selectByVisibleText(sortProductList);
    }

    public void clickCart() {cartButton.click();}
    public void clickCheckout() {checkOutButton.click();}
    public void setFirstName(String name) {
        firstName.sendKeys(name);
    }
    public void setLastName(String name) {
        lastName.sendKeys(name);
    }
    public void setPostalCode(String code) {
        postalCode.sendKeys(code);
    }
    public void clickContinue() {continueButton.click();}
    public void clickFinish() {finishButton.click();}

    public void clickRemoveATT(){
        btnRemoveItemAllTheThings.click();
    }
    public void clickLogin () {
        btnLogin.click();
    }

    public boolean displayLandingPage() {
        return title.isDisplayed();
    }
}
