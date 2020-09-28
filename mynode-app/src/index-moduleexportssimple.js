const OrderService = require('./services/OrderService');

console.log(OrderService)
let { findAll } = new OrderService();
console.log(findAll())