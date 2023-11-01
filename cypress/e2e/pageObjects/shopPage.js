class homePage {
  getShopPage() {
    return cy.get(":nth-child(2) > .nav-link");
  }
  getCheckoutButton() {
    return cy.get(".nav-link").contains("Checkout");
  }
}
export default homePage;
