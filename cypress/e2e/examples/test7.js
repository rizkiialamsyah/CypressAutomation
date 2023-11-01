///<reference types="cypress"/>

describe("My seventh Test Suite handling mouse hover", () => {
  it("My fifth Test Case", () => {
    cy.visit(Cypress.env("url") + "/AutomationPractice");

    //cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Reload").click({ force: true });
    cy.url().should("include", "Automation");
  });
});
