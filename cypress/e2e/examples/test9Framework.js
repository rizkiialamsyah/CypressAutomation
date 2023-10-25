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
    const homeObject = new homePage();
    cy.visit(Cypress.env("url") + "/angularpractice");
    homeObject.getEditBox().type(globalThis.data.name);
    homeObject.getEditBox().should("have.attr", "minlength", 2);
    homeObject.getEmailBox().type(globalThis.data.email);
    homeObject.getPasswordbox().type(globalThis.data.password);
    homeObject.getCheckBox().check();
    homeObject.getGender().select(globalThis.data.gender);

    homeObject
      .getTwoWayDataBinding()
      .should("have.value", globalThis.data.name);

    homeObject.getEntrepreneur().should("be.disabled");
  });

  it("Memilih 2 produk masuk cart dan checkout", () => {
    const shopObject = new shopPage();
    const cartObject = new cartPage();
    const checkoutObject = new checkoutPage();

    cy.visit(Cypress.env("url") + "/angularpractice");

    shopObject.getShopPage().click();
    globalThis.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });

    //cart page
    shopObject.getCheckoutButton().click();

    var sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each(($el, index, list) => {
        const priceAmount = $el.text();
        var res = priceAmount.split(" ");
        res = res[1].trim();
        sum = Number(sum) + Number(res);
      })
      .then(() => {
        cy.log(sum);
      });

    cy.get("h3 strong").then((element) => {
      const priceAmount = element.text();
      var res = priceAmount.split(" ");
      var total = res[1].trim();
      expect(Number(total)).to.equal(sum);
    });

    cartObject.getCheckoutPage().click();
    checkoutObject.getCountry().type("Indone");
    cy.get(".suggestions").click();
    cy.get("#checkbox2").click({ force: true });
    cy.get("input[type='submit']").click();

    //short troubleshooting //cy.get(".alert-success").contains("Success!");

    //using element object
    cy.get(".alert-success").then((element) => {
      const actualText = element.text();
      expect(actualText.includes("Success!")).to.be.true;
    });
  });
});
