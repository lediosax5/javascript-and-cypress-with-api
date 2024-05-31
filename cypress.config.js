const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/*.{js,feature}",
    baseUrl: 'https://pushing-it.vercel.app/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    defaultCommandTimeout: 21000,
    watchForFileChanges: false,
  },
  env: { // we can use this or fixture // Cypress.env().user
    user: 'pushingit',
    pass: '123456!'
  },
  retries: 1,
  //video: true,
  projectId: "anyf6i"
});
