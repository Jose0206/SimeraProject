const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'HTML Reports',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: process.env.BASE_URL, 
    defaultCommandTimeout: 10000,
  },
  env: process.env,
});