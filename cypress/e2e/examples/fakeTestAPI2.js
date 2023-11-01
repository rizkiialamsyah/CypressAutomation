///<reference types="cypress"/>
describe("Fake Test API 2nd Time", () => {
  it("First API Test", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (request) => {
        request.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty";

        request.continue((response) => {
          //expect(response.statusCode).to.equal(403);
        });
      }
    ).as("dummyUrl");
    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@dummyUrl");

    //length of the response array = rows of the table
  });
});
