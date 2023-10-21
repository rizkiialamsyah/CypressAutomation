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
    cy.get("h4 .ng-untouched").should("have.value", globalThis.data.name);
    cy.get("input[name='name']:nth-child(2)").should(
      "have.attr",
      "minlength",
      2
    );
    cy.get("#inlineRadio3").should("be.disabled");
  });
});
