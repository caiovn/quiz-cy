const CommonElements = {
  navbarItem: (item: string) => {
    cy.get("a").contains(item).click();
  },
};

export default CommonElements;
