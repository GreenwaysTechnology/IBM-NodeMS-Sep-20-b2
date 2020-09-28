//object relationship ; is-a,has-a

class Order {
    constructor(orderId = 'O001', value = 0) {
        this.orderId = orderId;
        this.value = value;
    }
}

class Customer {
    constructor(custId = 'C001', name = 'foo', order = new Order()) {
        //has-a
        this.custId = custId;
        this.name = name;
        //has-a
        this.order = order;
    }
}
let customer = null;
customer = new Customer();
console.log(customer);
console.log(customer.custId, customer.name, customer.order.orderId, customer.order.value)
customer = new Customer('C003', 'subramanian', new Order('O002', 1000));
console.log(customer);
console.log(customer.custId, customer.name, customer.order.orderId, customer.order.value)
/////////////////////////////////////////////////////////////////////////////////
//inheritance

class Account {
    constructor(id) {
        this.id = id;
        console.log('account')
    }
    deposit() {
        return 100;
    }
}
class SavingsAccount extends Account {
    constructor(id = 1) {
        super(id);
        console.log('SavingsAccount')
    }
    deposit() {
        return 1000 * super.deposit();
    }
}
let sb = new SavingsAccount(12);
console.log(sb.id, sb.deposit())




















