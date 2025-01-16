class Inventory {
    addToCartByNames(productNames) {
        productNames.forEach(productName => {
            // Find all product elements
            cy.get('.inventory_item').each(($el) => {
                if ($el.find('.inventory_item_name').text().trim() === productName) {
                    // Click the "Add to cart" button within the product element
                    cy.wrap($el).find('.btn_inventory').click();
                }
            });
        });
    }
}

export { Inventory };