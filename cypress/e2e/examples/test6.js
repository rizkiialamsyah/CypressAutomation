///<reference types="cypress"/>

describe("My Fifth Test Suite handling Web Table", () => {
  it("My fifth Test Case", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");
    cy.get("tr td:nth-child(2)").each(($el, index, list) => {
      const textFinder = $el.text();
      if (textFinder.includes("Practical")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((price) => {
            const priceText = price.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });
});
