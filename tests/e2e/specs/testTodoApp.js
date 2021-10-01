describe("Test todo app", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("check header text", () => {
    cy.get("h1").contains("to do list");
  });
});
