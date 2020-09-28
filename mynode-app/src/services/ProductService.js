const PRODUCTS = require('../mock-data/products')

class ProductService {
    constructor() {
        console.log('Product Service is being intialized')
    }
    findAll() {
        return PRODUCTS;
    }
    save() {
        return 'save'
    }
}
module.exports = new ProductService();