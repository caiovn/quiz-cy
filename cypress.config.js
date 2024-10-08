const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "cypress-cucumber-preprocessor": {
    nonGlobalStepDefinitions: false,
    step_definitions: "./cypress/support/steps",
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/integration/**/*.feature",
    supportFile: false,
  },
});
