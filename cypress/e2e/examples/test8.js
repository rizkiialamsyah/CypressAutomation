///<reference types="cypress"/>
///<reference types="cypress-iframe"/>
import "cypress-iframe";

describe("My eighth Test Suite handling iframe", () => {
  it("My eighth Test Case", () => {
    cy.visit(Cypress.env("url") + "/AutomationPractice");
    cy.frameLoaded("#courses-iframe");

    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    cy.wait(100);
    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
  });
});
