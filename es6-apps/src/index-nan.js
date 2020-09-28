//NaN - Not a number, it error code
let qty;
let price = 1000;
let totalPrice = qty * price;
console.log(`Total Price ${totalPrice}`)

//use case ; during type conversion ; string to number

//type conversion

//salary  is string
let salary = "1000"
//totalworkings are number
let totalworkingdays = 13;
// salary *  totalworkingdays = string is converted into number then ,computation starts
//conversion happens auotmattically; impilicit conversion
let totalSalary = salary * totalworkingdays;

//using coversion apis - parseXX
//explicit conversion
let totalSalary2 = parseInt(salary) * totalworkingdays
console.log(`Total Salary ${totalSalary}`)
console.log(`Total Salary ${totalSalary2}`)

//type conversion error;

let age = "$18"
let policyvalue = 1200;
let maturevalue = policyvalue * age
console.log(`Total maturevalue ${maturevalue}`)
maturevalue = parseInt(age) * policyvalue;
console.log(`Total maturevalue ${maturevalue}`)