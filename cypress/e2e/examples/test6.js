///<reference types="cypress"/>

describe("My Fifth Test Suite handling Web Table", () => {
  it("My fifth Test Case", () => {
    cy.visit(Cypress.env("url") + "/AutomationPractice");
    cy.get("tr td:nth-child(2)").each(($el, index, list) => {
      const textFinder = $el.text();
      if (textFinder.includes("TestNG")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((price) => {
            const priceText = price.text();
            expect(priceText).to.equal("20");
          });
      }
    });
  });

  it("Test Web Table Head Fixed", () => {
    cy.visit(Cypress.env("url") + "/AutomationPractice");
    cy.get("tr td:nth-child(1)").each(($el, index, list) => {
      const pencariTeks = $el.text();
      if (pencariTeks.includes("Ivory")) {
        cy.get("tr td:nth-child(1)")
          .eq(index)
          .next()
          .then((jobTitle) => {
            const jobDesc = jobTitle.text();
            expect(jobDesc).to.equal("Receptionist");
            cy.log(jobDesc);
          });
      }
    });
  });
});
