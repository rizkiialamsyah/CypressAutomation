///<reference types="cypress"/>

describe("My Second Test Suite", () => {
  it("My first Test Case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");

    //parent child chaining
    cy.get(".products").as("productLocator");

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.get("button").contains("Place Order").click();
  });
});
