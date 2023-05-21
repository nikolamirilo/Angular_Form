/// <reference types="cypress" />


Cypress.Commands.add("verifyErrorMessage", (selector:string, value: string)=>{
    cy.get(selector).find(".invalid-feedback").should("contain.text", value);
})

Cypress.Commands.add("verifyErrorMessageNonExistant", (selector:string)=>{
    cy.get(`${selector} .invalid-feedback`).should("not.exist");
})
Cypress.Commands.add("resetForm", ()=>{
    cy.get("#reset").click()
})

