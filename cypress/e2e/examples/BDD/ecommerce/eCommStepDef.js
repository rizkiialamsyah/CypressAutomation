/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import checkoutPage from "../../../pageObjects/checkoutPage";
import cartPage from "../../../pageObjects/cartPage";
import shopPage from "../../../pageObjects/shopPage";
import homePage from "../../../pageObjects/homePage";

const homeObject = new homePage();
const shopObject = new shopPage();
const cartObject = new cartPage();
const checkoutObject = new checkoutPage();
let rawName;

Given("I open Ecommerce Page", () => {
  cy.visit(Cypress.env("url") + "/angularpractice");
});

//When
When("I add item to cart", () => {
  shopObject.getShopPage().click();
  globalThis.data.productName.forEach((element) => {
    cy.selectProduct(element);
  });

  //cart page
  shopObject.getCheckoutButton().click();
});

When("validate the total prices", () => {
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
});

Then("Select the country submit and verify thankyou", () => {
  cartObject.getCheckoutPage().click();
  checkoutObject.getCountry().type("Indone");
  cy.get(".suggestions").click();
  cy.get("#checkbox2").click({ force: true });
  cy.get("input[type='submit']").click();

  cy.get(".alert-success").then((element) => {
    const actualText = element.text();
    expect(actualText.includes("Success!")).to.be.true;
  });
});

//When i fill the forms details
When("I fill the forms details", (dataTable) => {
  rawName = dataTable.rawTable[1][0];
  //data tabel [Grace noona, Female]
  homeObject.getEditBox().type(dataTable.rawTable[1][0]);
  homeObject.getEmailBox().type(globalThis.data.email);
  homeObject.getPasswordbox().type(globalThis.data.password);
  homeObject.getCheckBox().check();
  homeObject.getGender().select(dataTable.rawTable[1][1]);
});
Then("validate the forms behaviour", () => {
  homeObject.getTwoWayDataBinding().should("have.value", rawName);
  homeObject.getEditBox().should("have.attr", "minlength", 2);
  homeObject.getEntrepreneur().should("be.disabled");
  Cypress.config("defaultCommandTimeout", 7000);
});
Then("Select the shop Page", () => {
  shopObject.getShopPage().click();
});
