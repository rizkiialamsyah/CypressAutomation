///<reference types="cypress"/>

describe("My seventh Test Suite handling mouse hover", () => {
  it("My fifth Test Case", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");

    //cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Reload").click({ force: true });
    cy.url().should("include", "Automation");
  });
});
