///<reference types="cypress"/>

describe("My Fourth Test Suite", () => {
  it("My fourth Test Case", () => {
    cy.visit(Cypress.env("url") + "/AutomationPractice");
    cy.get("#alertbtn").click();
    cy.get("[value='Confirm']").click();

    cy.on("window:alert", (Text) => {
      expect(Text).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.on("window:confirm", (Text) => {
      expect(Text).to.equal("Hello , Are you sure you want to confirm?");
    });
  });
});
