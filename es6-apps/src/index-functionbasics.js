//how to declare functions

function sayHello() {
    //funciton body
    console.log('sayHello')
}
//how to invoke function
sayHello();

//every function takes args and return value
//a , b is args
//default args
function add(a = 0, b = 0) {
    let result = a + b;
    console.log(result);
}
//parameters -10,10
add(10, 10)
let x = 10;
let y = 10;
add(x, y);
//undefined,undefined
add();
add(90);
add(undefined, 80);

//return value;

function getName() {
    return 'Subramanian';
}
console.log(getName())
function getAge() {
    let age = 18;
    return age;
}
console.log(getAge())
function calculate(a = 1, b = 1) {
    return a + b;
}
console.log(calculate(12, 12))

function status() {
    return; //undefined
}
console.log(status())

function login(username = 'admin', password = 'admin') {
    if (username === 'admin' && password === 'admin') {
        return true;
    }
    return;
}

if (login()) {
    console.log('login success')
} else {
    console.log('login failed')
}
if (login('admin', 'foo')) {
    console.log('login success')
} else {
    console.log('login failed')
}
//use tenary operator to replace if
login() ? console.log('login success') : console.log('login failed')


