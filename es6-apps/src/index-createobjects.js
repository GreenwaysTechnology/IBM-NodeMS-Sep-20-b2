//constructor pattern
//-using es 5 pattern - functon
//using es 6 classes
function Employee() {
    //instance variables
    this.id = 1;
    this.firstName = 'subramaian'
    this.active = true;
    //instance methods
    this.calculateSalary = function () {
        return 1000 * 23;
    }
}
//create object
//emp is reference variable
//new is operator to create object
//Employee() -constructor call
let emp = new Employee();
console.log(emp.id)
console.log(emp.firstName)
console.log(emp.active)
console.log(emp.calculateSalary())

//es 6 class
class Customer {
    //instance variable
    id = 1;
    firstName = 'subramaian'
    //methods
    calculateInvoice() {
        return 1000;
    }

}
let cust=new Customer();
console.log(cust.id)
console.log(cust.firstName)
console.log(cust.calculateInvoice())
