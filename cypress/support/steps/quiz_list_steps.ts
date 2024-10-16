import { Given, When } from "cypress-cucumber-preprocessor/steps";
import QuizListElements from "../elements/quiz_list_elements";

Given("que estou na listagem de quizzes", () => {
  cy.visit("localhost:3000/quiz");
});

When("clicar no botão de criar na tela de listagem de quizzes", () => {
  cy.get(QuizListElements.createBtn).click();
});
