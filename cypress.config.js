const { defineConfig } = require("cypress");

module.exports = defineConfig({
  maxDuration: 3000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
