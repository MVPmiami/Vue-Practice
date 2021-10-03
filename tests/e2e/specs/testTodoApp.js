describe("Test todo app", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("check header text", () => {
    cy.get("h1").contains("to do list");
  });
  it("check zero task message", () => {
    cy.get("main:nth-child(2n)").contains("There are no tasks");
  });
  it("enter task to input", () => {
    cy.get("form").find("input").type("qwerty");
  });
  it("add new task to task list", () => {
    cy.get("form").find("input").type("qwerty").type("{enter}");
  });
  it("check task in the task list", () => {
    cy.get("form").find("input").type("qwerty").type("{enter}");
    cy.get("main").find("label").click();
  });
  it("delete task from task list", () => {
    cy.get("form").find("input").type("qwerty").type("{enter}");
    cy.get("main").find("button").click();
  });
  it("sort tasks", () => {
    cy.get("form").find("input").type("qwerty1").type("{enter}");
    cy.get("form").find("input").type("qwerty2").type("{enter}");
    cy.get("main").find("div:first-child > div > label").click();
    cy.get("footer")
      .find("div:nth-child(2n)")
      .find("label:nth-child(2n)")
      .click();
    cy.wait(1500);
    cy.get("footer")
      .find("div:nth-child(2n)")
      .find("label:nth-child(3n)")
      .click();
    cy.wait(1500);
    cy.get("footer")
      .find("div:nth-child(2n)")
      .find("label:first-child")
      .click();
  });
});
