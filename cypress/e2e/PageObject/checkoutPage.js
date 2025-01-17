class Checkout {

    get CheckoutTitle() {
        return cy.get('.checkout-title');
    }

    get firstName() {
        return cy.get('#first-name');
    }

    get lastName() {
        return cy.get('#last-name');
    }

    get postalCode() {
        return cy.get('#postal-code');
    }

    get continueButton() {
        return cy.get('.cart_button');
    }

    get finishButton() {
        return cy.get('.cart_button');
    }

    get finishTitle() {
        return cy.get('.complete-header');
    }

    get finishText() {
        return cy.get('.complete-text');
    }

    get finishImage() {
        return cy.get('.pony_express');
    }

    get errorText() {
        return cy.get('h3');
    }

    get errorButton() {
        return cy.get('.error-button');
    }

    completeCheckout(name, lName, zipCode) {
        this.firstName.type(name);
        this.lastName.type(lName);
        this.postalCode.type(zipCode);
        this.continueButton.click();
    }
}

export {Checkout};