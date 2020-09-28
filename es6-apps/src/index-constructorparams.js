//state initalization ;
//hard coded way
//after object creation using reference variable
//constructor parameters

function Employee(id = 1, firstName = 'Subramanian', active = false) {
    //instance variables
    this.id = id //1;
    this.firstName = firstName //'subramaian'
    this.active = active//true;
    //instance methods
    this.calculateSalary = function () {
        return 1000 * 23;
    }
}

let emp = null;

emp = new Employee();
console.log(emp.id)
console.log(emp.firstName)
console.log(emp.active)
console.log(emp.calculateSalary())
//state initalization
emp.id = 9999;
emp.firstName = 'ram';
emp.active = false
console.log(emp.id)
console.log(emp.firstName)
console.log(emp.active)


emp = new Employee(34, 'karthik', true);
console.log(emp.id)
console.log(emp.firstName)
console.log(emp.active)
console.log(emp.calculateSalary())

class Customer {
    //constructor 
    constructor(id = 1, firstName = 'Subramanian') {
        //instance variable
        this.id = id//1;
        this.firstName = firstName;//'subramaian'

    }
    //methods
    calculateInvoice() {
        return 1000;
    }

}

let cust =null;
cust = new Customer();
console.log(cust.id)
console.log(cust.firstName)
console.log(cust.calculateInvoice())
cust.id = 99999;
cust.firstName = 'john'
console.log(cust.id)
console.log(cust.firstName)

cust = new Customer(34545,'foo');
console.log(cust.id)
console.log(cust.firstName)
