///<reference types="cypress"/>

describe("My First Test Suite", () => {
  it("My first Test Case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);

    //parent child chaining
    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);

    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .then(() => console.log("Produk berhasil ditambahkan"));

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".brand").should("have.text", "GREENKART");
    cy.get(".brand").then((logoElement) => {
      cy.log(logoElement.text());

      //cy.get(".brand").text();
    });
  });
});
