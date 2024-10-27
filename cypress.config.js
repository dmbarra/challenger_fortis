const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  retries: 1,
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "https://www.random.org/calendar-dates/", // this is specific to e2e as well
    supportFile: false,
    viewportWidth: 1024,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
  },
});
