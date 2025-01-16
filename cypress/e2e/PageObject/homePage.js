class Home {

    get menuButton() {
        return cy.get('#react-burger-menu-btn');
    }

    get cartButton() {
        return cy.get('.shopping_cart_link');
    }

    navigateTo(option){
        this.menuButton.click();
        cy.xpath("//a[contains(text(),'" + option + "')]").click();
    }
}

export { Home };