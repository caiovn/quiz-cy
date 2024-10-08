import { Given } from "cypress-cucumber-preprocessor/steps";

Given("que estou na listagem de quizzes", () => {
  cy.visit("localhost:3000/quiz");
});
