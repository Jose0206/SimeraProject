class Inventory {
    addToCartByNames(productNames) {
        productNames.forEach(productName => {
            cy.xpath(`//div[contains(@class, 'inventory_item') and .//div[contains(@class, 'inventory_item_name') and text()='${productName}']]//button[contains(@class, 'btn_inventory')]`)
              .click();
        });
    }
}

export { Inventory };