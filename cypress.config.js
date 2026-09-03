const { defineConfig } = require("cypress");

const baseUrl = process.env.BASEURL?.trim() || undefined;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl,
    env: {
      EMAIL: process.env.EMAIL,
      PASSWORD: process.env.PASSWORD,
    },
  },
});
