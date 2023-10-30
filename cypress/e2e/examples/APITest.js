///<reference types="cypress"/>
describe("Test API 1st Time", () => {
  it("First API Test", () => {
    cy.request("POST", "http://216.10.245.166/Library/Addbook.php       ", {
      name: "Learn Appium Automation with Java",
      isbn: "bcdsndajm",
      aisle: "227",
      author: "John foe",
    }).then((response) => {
      expect(response.body).to.have.property("Msg", "successfully added");
      expect(response.status).to.eq(200);
    });
  });
});
