class homePage {
  getEditBox() {
    return cy.get("input[name='name']:nth-child(2)");
  }
  getEmailBox() {
    return cy.get("input[name='email']");
  }
  getPasswordbox() {
    return cy.get("#exampleInputPassword1");
  }
  getCheckBox() {
    return cy.get("#exampleCheck1");
  }
  getGender() {
    return cy.get("select");
  }
  getEntrepreneur() {
    return cy.get("#inlineRadio3");
  }

  getTwoWayDataBinding() {
    return cy.get(".ng-untouched");
  }

  getShopPage() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}
export default homePage;
