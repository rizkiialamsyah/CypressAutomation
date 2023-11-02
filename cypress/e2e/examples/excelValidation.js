/// <reference types="cypress" />

//const neatCSV = require('neat-csv')

const excelToJson = require("convert-excel-to-json");
const fs = require("fs");
let productName;

describe("JWT Session", () => {
  it("is logged in through local storage and testing to read excel file", async () => {
    cy.LoginAPI().then(function () {
      cy.visit(
        "https://rahulshettyacademy.com/client",

        {
          onBeforeLoad: function (window) {
            window.localStorage.setItem("token", Cypress.env("token"));
          },
        }
      );
    });

    cy.get(".card-body b")
      .eq(1)
      .then(function (ele) {
        productName = ele.text();
      });

    cy.get(".card-body button:last-of-type").eq(1).click();

    cy.get("[routerlink*='cart']").click();
    cy.wait(500);
    cy.contains("Checkout").click();

    cy.get("[placeholder*='Country']").type("indo");

    cy.get(".ta-results button").each(($e1, index, $list) => {
      if ($e1.text() === " Indonesia") {
        cy.wrap($e1).click();
      }
    });

    cy.get(".action__submit").click();

    cy.wait(2000);

    cy.get(".order-summary button").contains("Excel").click();
    const filePath =
      Cypress.config("fileServerFolder") +
      "/cypress/downloads/order-invoice_ikaikenway.xlsx";
    cy.task("excelToJsonConverter", filePath).then((result) => {
      cy.log(result.data[1].A);
      expect(productName).to.eq(result.data[1].B);
    });

    cy.readFile(filePath).then((text) => {
      expect(text).to.include(productName);
    });
  });
});
