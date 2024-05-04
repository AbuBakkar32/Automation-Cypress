const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2k8vto',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
