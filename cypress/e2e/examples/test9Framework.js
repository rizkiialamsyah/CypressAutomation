///<reference types="cypress"/>
import homePage from "../pageObjects/homePage";
import shopPage from "../pageObjects/shopPage";
import cartPage from "../pageObjects/cartPage";
import checkoutPage from "../pageObjects/checkoutPage";

describe("My ninth Test Suite creating frameworks", () => {
  before(() => {
    // root-level hook
    // runs once before all tests
    cy.fixture("example.json").then((data) => {
      globalThis.data = data;
    });
  });

  it("My ninth Test Case frameworks", () => {
    const pageObject = new homePage();
    cy.visit("https://rahulshettyacademy.com/angularpractice");
    pageObject.getEditBox().type(globalThis.data.name);
    pageObject.getEditBox().should("have.attr", "minlength", 2);
    pageObject.getEmailBox().type(globalThis.data.email);
    pageObject.getPasswordbox().type(globalThis.data.password);
    pageObject.getCheckBox().check();
    pageObject.getGender().select(globalThis.data.gender);

    pageObject
      .getTwoWayDataBinding()
      .should("have.value", globalThis.data.name);

    pageObject.getEntrepreneur().should("be.disabled");
  });

  it("Memilih 2 produk masuk cart dan checkout", () => {
    const shopObject = new shopPage();
    const cartObject = new cartPage();
    const checkoutObject = new checkoutPage();

    cy.visit("https://rahulshettyacademy.com/angularpractice");

    shopObject.getShopPage().click();
    globalThis.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });

    shopObject.getCheckoutButton().click();

    cy.get("tr td:nth-child(4) strong").each(($el, index, list) => {
      const actualText = $el.text();
      var res = actualText.split(" ");
      res = res[1].trim;
      cy.log(res);
    });

    cartObject.getCheckoutPage().click();
    checkoutObject.getCountry().type("Indone");
    cy.get(".suggestions").click();
    cy.get("#checkbox2").click({ force: true });
    cy.get("input[type='submit']").click();

    //short troubleshooting
    //cy.get(".alert-success").contains("Success!");

    //using element object
    cy.get(".alert-success").then((element) => {
      const actualText = element.text();
      expect(actualText.includes("Success!")).to.be.true;
    });
  });
});
