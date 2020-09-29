

class OrderService {
    constructor() {
        console.log('Order service is being intialized')
    }
    findAll() {
        return 'findAll'
    }
    save(order) {
        console.log(order);
        return 'save'
    }
}
module.exports = OrderService();