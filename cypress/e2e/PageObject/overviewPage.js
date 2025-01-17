class Overview {
    validateProductsInOverview(productNames) {
        productNames.forEach(productName => {
            cy.xpath("//div[contains(@class,'inventory_item_name')]")
                .should('contain', productName);});
    }
}

export { Overview };