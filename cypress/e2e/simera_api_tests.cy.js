import { faker } from '@faker-js/faker';
import { BrandAPI } from './PageObject/BrandAPI';

// Instantiate the class
const brandAPI = new BrandAPI();

describe('Simera API Tests', () => {
    
      it('Get all brands', () => {
     brandAPI.getBrands().then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
     });
      });
    
      it('Create a new brand and get it by id', () => {
         // Define the test data
         const brandName = faker.commerce.productName();
         const brandSlug = faker.lorem.slug();
     
         // First, create a new brand
         brandAPI.createBrand(brandName, brandSlug).then((createResponse) => {
           expect(createResponse.status).to.eq(201);
           expect(createResponse.body).to.not.be.null;
     
           // Extract the ID of the newly created brand
           const brandId = createResponse.body.id;
     
           // Then, get the brand by ID
           brandAPI.getBrandById(brandId).then((getResponse) => {
             expect(getResponse.status).to.eq(200);
             expect(getResponse.body).to.not.be.null;
           });
         });
       });
     
       it('Create a new brand', () => {
         // Define the test data
         const brandName = faker.commerce.productName();
         const brandSlug = faker.lorem.slug();
     
         brandAPI.createBrand(brandName, brandSlug).then((response) => {
           expect(response.status).to.eq(201);
           expect(response.body).to.not.be.null;
         });
       });
   });
