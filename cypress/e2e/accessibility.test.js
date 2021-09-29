// This line at the top gives you autocompletion for the Cypress commands.
/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  describe("Landing page", () => {
    // Open default url and wait for .container element to load
    beforeEach(() => {
      cy.visit("/").get(".container").injectAxe();
    });

    it("Should load the correct URL", function () {
      cy.url().should("eq", "http://localhost:8000/");
    });

    it("Has no detectable accessibility violations on load", () => {
      cy.checkA11y();
    });
  });

  describe("Loadable page", () => {
    // Open Loadable url and wait for .container element to load
    beforeEach(() => {
      cy.visit("/loadable").get(".container").injectAxe();
    });

    it("Should load the correct URL", function () {
      cy.url().should("eq", "http://localhost:8000/loadable/");
    });

    it("Has no detectable accessibility violations on load", () => {
      cy.checkA11y();
    });
  });

  describe("Toy details page", () => {
    // Open default url and wait for .container element to load then redirect to toy-details page
    before(() => {
      cy.visit("/").get(".container").injectAxe();
      cy.get(".toys-container .toy-content .image-container a").first().click();
    });

    it("Should load the correct URL", function () {
      cy.url().should("includes", "http://localhost:8000/toy-details/");
    });

    it("Has no detectable accessibility violations on load", () => {
      const axeRunOptions = {
        rules: {
          "page-has-heading-one": { enabled: false },
        },
      };
      cy.checkA11y(null, axeRunOptions);
    });
  });
});
