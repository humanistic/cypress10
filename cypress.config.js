const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "zpvrpm",
  defaultCommandTimeout: 15000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
