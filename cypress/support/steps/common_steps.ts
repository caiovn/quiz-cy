import { Given, When } from "cypress-cucumber-preprocessor/steps";
import CommonElements from "../elements/common_elements";

Given("que estou no portal", () => {
  cy.visit("/");
});

When("acesso o item {string} na navbar", (item: string) => {
  CommonElements.navbarItem(item);
});
