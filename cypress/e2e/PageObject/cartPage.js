class Cart {
    get checkoutButton() {
        return cy.get('#checkout');
    }

    validateProductsInCart(productNames) {
        productNames.forEach(productName => {
            cy.xpath("//div[contains(@class,'inventory_item_name')]")
                .should('contain', productName);});
    }

    removeFromCartByNames(productNames) {
        productNames.forEach(productName => {
            cy.xpath(`//div[contains(@class, 'cart_item')]//div[contains(@class, 'inventory_item_name') and text()='${productName}']/ancestor::div[contains(@class, 'cart_item')]//button[contains(@class, 'cart_button')]`)
                .should('be.visible')
                .click();
        });
    }
}

export { Cart };