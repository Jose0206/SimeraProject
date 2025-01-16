class BrandAPI{
    constructor() {
      this.url = Cypress.env('API_URL');
    }

    getBrands() {
        return cy.request({
            method: 'GET',
            url: this.url + 'brands',
            failOnStatusCode: false,
            headers : {
             'Content-Type': 'application/json',
            }
        })
            .then((response) => {
            return response;
        });
    }

    getBrandById(id) {
        return cy.request({
            method: 'GET',
            url: this.url + 'brands/' + id,
            failOnStatusCode: false,
            headers : {
             'Content-Type': 'application/json',
            }
        })
            .then((response) => {
            return response;
        });
    }

    createBrand(brandName, brandSlug) {
        return cy.request({
            method: 'POST',
            url: this.url + 'brands',
            failOnStatusCode: false,
            headers : {
             'Content-Type': 'application/json',
            },
            body: {
                 name: brandName,
                 slug: brandSlug
            }
        })
            .then((response) => {
            return response;
        });
    }
}

export { BrandAPI };