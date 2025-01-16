class Cart {
    get checkoutButton() {
        return cy.get('#checkout');
    }

    validateProductsInCart(productNames) {
        productNames.forEach(productName => {
            // Find all product elements in the cart
            cy.get('.cart_item').each(($el) => {
                // Check if the product element contains the product name
                if ($el.find('.inventory_item_name').text().trim() === productName) {
                    // Validate the product price
                    cy.wrap($el).find('.inventory_item_price').should('be.visible');
                }
            });
        });
    }

    removeFromCartByNames(productNames) {
        productNames.forEach(productName => {
            // Find all product elements in the cart
            cy.get('.cart_item').each(($el) => {
                if ($el.find('.inventory_item_name').text().trim() === productName) {
                    // Click the "Remove" button within the product element
                    cy.wrap($el).find('.cart_button').click();
                }
            });
        });
    }
}

export { Cart };