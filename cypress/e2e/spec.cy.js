describe("template spec", () => {
  it("passes", () => {
    // Cypress has "implicit assertion", so even if we don't write an assert statement, if this page doesn't return 200 success, it will fail the test.
    cy.visit("https://example.cypress.io");
  });
});
