/// <reference types="cypress"/>
import page from "../support/page";
const selectors = require ("../fixtures/selectors.json");

describe("Testing text inputs", ()=>{
    beforeEach(()=>{
        cy.visit(Cypress.env("BASE_URL"));
    })
    // it("Testing Full Name error message", ()=>{
    //     cy.get(selectors.form).submit();
    //     cy.verifyErrorMessage(selectors.fullName, "Full Name is required.");
    // })
    it("Testing Full Name", ()=>{
        cy.get(selectors.form).submit();
        cy.verifyErrorMessage(selectors.fullName, "Full Name is required.");
        page.fullName.setValue("Nikola Mirilo");
        page.fullName.checkValue("Nikola Mirilo");
        cy.verifyErrorMessageNonExistant(selectors.fullName)
    })
    it("Testing Username", ()=>{
        cy.get(selectors.form).submit();
        cy.verifyErrorMessage(selectors.username, "Username is required.");
        page.username.setValue("nikola.mirilo");
        page.username.checkValue("nikola.mirilo");
        cy.verifyErrorMessageNonExistant(selectors.username)
    })
    it("Testing Email", ()=>{
        page.email.setValue("nikola.mirilo@gmail.com");
        cy.get(selectors.form).submit();
        cy.verifyErrorMessage(selectors.email, "Email is required.");
    })
    it("Testing Whole Form", ()=>{
        cy.get(selectors.form).submit();
        cy.verifyErrorMessage(selectors.username, "Username is required.");
        page.username.setValue("nikola.mirilo");
        page.username.checkValue("nikola.mirilo");
        cy.verifyErrorMessageNonExistant(selectors.username)
    })
    it("Testing Password Empty", ()=>{
        cy.get(selectors.form).submit();
        cy.verifyErrorMessage(selectors.password, "Password is required.");
    })
    it("Testing Password 5 characters", ()=>{
        page.password.setValue("abcde")
        cy.get(selectors.form).submit();
        cy.verifyErrorMessageNonExistant(selectors.password);
    })
    it("Testing passwords hidden", ()=>{
        page.password.verifyPassword();
        page.confirmPassword.verifyPassword();
    })
    it("Testing passwords hidden", ()=>{
        page.password.setValue("testPassword!1")
        page.password.checkValue("testPassword!1")

        page.confirmPassword.setValue("testPassword!")
        page.confirmPassword.checkValue("testPassword!")

        cy.get(selectors.form).submit();
        cy.verifyErrorMessageNonExistant(selectors.confirmPassword)
    })
    
})

describe("Testing checkbox", ()=>{
    beforeEach(()=>{
        cy.visit(Cypress.env("BASE_URL"));
        page.fullName.checkValue("")
        page.username.checkValue("")
        page.email.checkValue("")
        page.password.checkValue("")
        page.confirmPassword.checkValue("")
        page.acceptTerms.checkValue(false)

        cy.verifyErrorMessageNonExistant(selectors.fullName)
        cy.verifyErrorMessageNonExistant(selectors.username)
        cy.verifyErrorMessageNonExistant(selectors.email)
        cy.verifyErrorMessageNonExistant(selectors.password)
        cy.verifyErrorMessageNonExistant(selectors.confirmPassword)
        cy.verifyErrorMessageNonExistant(selectors.acceptTerms)
    })

    afterEach(()=>{
        cy.resetForm()

        page.fullName.checkValue("")
        page.username.checkValue("")
        page.email.checkValue("")
        page.password.checkValue("")
        page.confirmPassword.checkValue("")
        page.acceptTerms.checkValue(false)

        cy.verifyErrorMessageNonExistant(selectors.fullName)
        cy.verifyErrorMessageNonExistant(selectors.username)
        cy.verifyErrorMessageNonExistant(selectors.email)
        cy.verifyErrorMessageNonExistant(selectors.password)
        cy.verifyErrorMessageNonExistant(selectors.confirmPassword)
        cy.verifyErrorMessageNonExistant(selectors.acceptTerms)
    })
    it("Testing Accept Terms", ()=>{
        cy.get(selectors.form).submit();
        page.acceptTerms.checkValue(false)
        cy.verifyErrorMessage(selectors.acceptTerms, "Accept Terms checkbox is required.")

        cy.get(selectors.form).submit();
        page.acceptTerms.setValue()
        page.acceptTerms.checkValue(true)
        cy.verifyErrorMessage(selectors.acceptTerms, "Accept Terms checkbox is required..")
    })
    it("Testing registration 6/6 fields", ()=>{
        page.fullName.setValue("Nikola Mirilo")
        page.fullName.checkValue("Nikola Mirilo")

        page.username.setValue("nikola.mirilo")
        page.username.checkValue("nikola.mirilo")

        page.email.setValue("nikola.mirilo@gmail.com")
        page.email.checkValue("nikola.mirilo@gmail.com")

        page.password.setValue("React123!GA")
        page.password.checkValue("React123!GA")

        page.confirmPassword.setValue("React123!GA")
        page.confirmPassword.checkValue("React123!GA")

        page.acceptTerms.setValue()
        page.acceptTerms.checkValue(true)
    })
})