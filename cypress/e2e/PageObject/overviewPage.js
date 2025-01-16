class Overview {
    validateProductsInOverview(cartProductNames) {
        // Get the list of product names from the overview page
        const overviewProductElements = document.querySelectorAll('.overview_item .inventory_item_name');
        const overviewProductNames = Array.from(overviewProductElements).map(element => element.textContent.trim());

        // Compare the two lists
        const allProductsMatch = cartProductNames.every(productName => overviewProductNames.includes(productName)) &&
                                 overviewProductNames.every(productName => cartProductNames.includes(productName));

        if (allProductsMatch) {
            console.log('All products in the cart are present in the overview.');
        } else {
            console.error('Mismatch between cart products and overview products.');
        }
    }
}

export { Overview };