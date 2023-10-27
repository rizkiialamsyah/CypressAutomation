before(() => {
  // root-level hook
  // runs once before all tests
  cy.fixture("example.json").then((data) => {
    globalThis.data = data;
  });
});
