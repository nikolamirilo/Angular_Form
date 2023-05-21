import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    specPattern: "./cypress/tests/*.cy.ts"
  },
  env: {
    BASE_URL: "http://localhost:4200"
  }
});
