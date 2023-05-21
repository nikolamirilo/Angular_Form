declare namespace Cypress {
    interface Chainable{
        verifyErrorMessage(selector: string, value:string):void;
        verifyErrorMessageNonExistant(selector: string):void;
        resetForm():void
    }
}