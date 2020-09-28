//function as literal-store inside variable
//function declaration
//way -1
function sayHello(name = 'foo') {
    console.log(`hello ${name}`)
    return 'greeter'
}
let hello = sayHello;
let res = hello('ram');
console.log(res)

//way 2; anonmous function
let add = function (a = 1, b = 1) {
    console.log(`add ${a + b}`)
    return a + b;
};
let result
result = add();
console.log(result);
result = add(12, 12);
console.log(result);
