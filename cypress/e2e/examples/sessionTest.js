///<reference types="cypress"/>

describe("JWT Session", () => {
  it("is logged in through local storage", () => {
    cy.LoginAPI().then(() => {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: (window) => {
          window.localStorage.setItem("token", Cypress.env("token"));

          cy.get(".card").should("have.length", 3);
        },
      });
    });
  });
});
