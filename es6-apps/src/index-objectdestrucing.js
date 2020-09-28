//object destructuring;

let printEmployee;
printEmployee = employee => {
    console.log(`Id : ${employee.id}`);
    console.log(`name : ${employee.name}`);
    console.log(`Salary : ${employee.salary}`);
    console.log(`City : ${employee.address.city}`);

};
// printEmployee({
//     id: 1,
//     name: 'subramaian',
//     salary: 1000,
//     address:{
//         city:'coimbatore'
//     }
// })
//object destrucing syntax; way 1
printEmployee = employee => {
    //left {object keys}
    const { id, name, salary, address } = employee;
    console.log(`Id : ${id}`);
    console.log(`name : ${name}`);
    console.log(`Salary : ${salary}`);
    console.log(`City : ${address.city}`);

};
// printEmployee({
//     id: 1,
//     name: 'subramaian',
//     salary: 1000,
//     address:{
//         city:'coimbatore'
//     }
// })
//object destrucing syntax; way 2
printEmployee = ({ id, name, salary, address }) => {
    console.log(`Id : ${id}`);
    console.log(`name : ${name}`);
    console.log(`Salary : ${salary}`);
    console.log(`City : ${address.city}`);

};

//call function by passing object
printEmployee({
    id: 1,
    name: 'subramaian',
    salary: 1000,
    address: {
        city: 'coimbatore'
    }
})

printEmployee = ({ id, name, salary, address: { city } }) => {
    console.log(`Id : ${id}`);
    console.log(`name : ${name}`);
    console.log(`Salary : ${salary}`);
    console.log(`City : ${city}`);

};
printEmployee({
    id: 1,
    name: 'subramaian',
    salary: 1000,
    address: {
        city: 'coimbatore'
    }
})
//////////////////////////////////////////////////////////////////////////////

class OrderService {
    constructor() {

    }
    findAll() {
        return 'findAll'
    }
    save() {
        return 'save'
    }
    remove() {
        return 'remove'
    }
    update() {
        return 'update'
    }
}
let orderService = new OrderService();
console.log(orderService.findAll())
console.log(orderService.save())
console.log(orderService.remove())
console.log(orderService.update())
//dest
let { findAll, save, remove, update } = new OrderService();
console.log(findAll())
console.log(save())
console.log(remove())
console.log(update())
/////////////////////////////////////////////////////////////////////////////////

//return objects

function getStock() {
    return {
        id: 1,
        symbol: 'Goo',
        qty: 100,
        price: 10000
    }
}
//arrow
let getStock1;
getStock1 = () => {
    return {
        id: 1,
        symbol: 'Goo',
        qty: 100,
        price: 10000
    }
}
console.log(getStock1())
getStock1 = () => ({
    id: 1,
    symbol: 'Goo',
    qty: 100,
    price: 10000
});
console.log(getStock1())

getStock1 = (id = 1, symbol = 'Google', qty = 100, price = 10000) => ({
    id: id,
    symbol: symbol,
    qty: qty,
    price: price
});
console.log(getStock1())

//if key : value ===same; make it one
getStock1 = (id = 1, symbol = 'Google', qty = 100, price = 10000) => ({
    id,
    symbol,
    qty,
    price
});
console.log(getStock1())
