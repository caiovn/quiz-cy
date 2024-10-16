const FormUtilities = {
  typeText: (element: string, text: string, envVar?: string) => {
    cy.get(element).type(text).blur();
    envVar && Cypress.env(envVar, text);
  },
  forceBlur: (element: string) => {
    cy.get(element).focus().blur();
  },
  checkInputError: (element, errorMsg) => {
    cy.get(element).should("be.visible");
  },
};

export default FormUtilities;
