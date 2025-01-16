class Checkout {

    get CheckoutTitle() {
        return cy.get('.checkout-title');
    }

    get FirstName() {
        return cy.get('#first-name');
    }

    get LastName() {
        return cy.get('#last-name');
    }

    get PostalCode() {
        return cy.get('#postal-code');
    }

    get ContinueButton() {
        return cy.get('.cart_button');
    }

    get FinishButton() {
        return cy.get('.cart_button');
    }

    get FinishTitle() {
        return cy.get('.complete-header');
    }

    get FinishText() {
        return cy.get('.complete-text');
    }

    get FinishImage() {
        return cy.get('.pony_express');
    }

    get BackHomeButton() {
        return cy.get('.cart_button');
    }

    get CancelButton() {
        return cy.get('.cart_button');
    }

    get ErrorText() {
        return cy.get('h3');
    }

    get rrorButton() {
        return cy.get('.error-button');
    }

    completeCheckout(firstName, lastName, postalCode) {
        this.FirstName.type(firstName);
        this.LastName.type(lastName);
        this.PostalCode.type(postalCode);
        this.ContinueButton.click();
    }
}

export {Checkout};