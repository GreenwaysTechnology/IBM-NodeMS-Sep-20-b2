//literal objects ; key :value
//value could be any literal

let customer = {
    id: 1,
    name: 'subramanian',
    status: true,
    //es 5 style
    // calculateInvoice: function () {
    //     return 1000;
    // }
    //es 6 style;arrow
    //calculateInvoice: () => 1000
    //es 6 class style
    calculateInvoice() {
        return 1000
    }
};
console.log(customer.id, customer.name, customer.status, customer.calculateInvoice())

//has - a 

let employee = {
    id: 1,
    name: 'subramanian',
    status: true,
    //has-a , nested object
    address: {
      city:'Coimbatore',
      state:'TN'
    }

}
console.log(employee.id, employee.name, employee.status, employee.address.city);