///<reference types="cypress"/>
describe("Fake Test API 1st Time", () => {
  it("First API Test", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "RSU",
            aisle: 2301,
          },
        ],
      }
    ).as("bookRetrievals");
    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@bookRetrievals").then(({ request, response }) => {
      cy.get("tr").should("have.length", response.body.length + 1);
    });
    cy.get("p").should("have.text", "Oops only 1 Book available");
  });

  //length of the response array = rows of the table
});
