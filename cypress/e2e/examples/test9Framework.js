///<reference types="cypress"/>

describe("My ninth Test Suite creating frameworks", () => {
  before(() => {
    // root-level hook
    // runs once before all tests
    cy.fixture("example.json").then((data) => {
      globalThis.data = data;
    });
  });

  it("My ninth Test Case frameworks", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice");
    cy.get("input[name='name']:nth-child(2)").type(globalThis.data.name);
    cy.get("select").select(globalThis.data.gender);
  });
});
