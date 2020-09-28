//arrow funcitons

let sayHello;

//es 5 declaration
sayHello = function () {
    console.log('Hello')
};
sayHello();
//es 6 arrow style declaration;
sayHello = () => {
    console.log('Hello')
};
sayHello();
//if function has one line of body;remove {}
sayHello = () => console.log('Hello')
sayHello();
//args and parameters; multi args
let add;
add = (a = 1, b = 1) => {
    let c = a + b;
    console.log(c);
};
add(10, 10)
add = (a = 1, b = 1) => console.log(a + b);
add(10, 10);
//single arg without default value;remove()
let getValue;
getValue = a => console.log(a);
getValue(10);

//arrow and return values;
let multiply;
multiply = (a = 1, b = 1) => {
    let c = a * b;
    return c;
};
console.log(multiply())
//body has only return statement; remove {} and return statement
multiply = (a = 1, b = 1) => a * b;
console.log(multiply())

//single parameter , return the same, no default value;
let getStock = value => value;
console.log(getStock(12))
///////////////////////////////////////////////////////////////////////////////////

let handle = handler => handler();
let socketHandler = () => console.log('socket handler')
handle(socketHandler);
handle(() => console.log('socket handler'));


const requestHandler = handle => {
    let fakeResponse = 'Hey, this is fake response!!!';
    let status = handle(fakeResponse);
    status ? console.log('response committed') : console.log('response commit failed')
}

let httpHandler = response => {
    console.log(response)
    return true;
};
requestHandler(httpHandler);
requestHandler((response) => {
    console.log(response)
    return true;
});
///////////////////////////////////////////////////////////////////

const counter = () => {
    console.log('outer inc')
    return a => {
        console.log('inner inc', a)
        return a * 10;
    };
}
console.log(counter()(20))

let myfunction;
myfunction = function (value1) {
    return function (value2) {
        return function (value3) {
            return function (value4) {
                return value1 * value2 * value3 * value4;
            }
        }
    }
};
console.log(myfunction(1)(2)(3)(4))


//arrow version of above
myfunction = value1 => {
    return value2 => {
        return value3 => {
            return value4 => {
                return value1 * value2 * value3 * value4;
            }
        }
    }
};
console.log(myfunction(1)(2)(3)(4))

myfunction = value1 => value2 => value3 => value4 => value1 * value2 * value3 * value4;
console.log(myfunction(1)(2)(3)(4))














