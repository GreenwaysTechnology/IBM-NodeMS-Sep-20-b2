//Promise Object creation, handle succcess and resolve.

const { log } = console;
//callback version
const sayHello = (callback) => setTimeout(callback, 1000, 'Hello!!!');
sayHello(response => log(response))
//promise version 
//promise does not take any callback as parameter
//results are captured by then and catch methods of Promise Object

const sayHai = () => {
    //send only success
    return Promise.resolve('Hello Promise');
};
const getError = () => {
    return Promise.reject('something went wrong')
}

///some biz logic
const validate = (userName = 'admin', password = 'admin') => {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Login success')
    } else {
        return Promise.reject('Login failed')
    }
}


console.log('start')
// let mypromise = sayHai();
// mypromise.then(response=>log(response))
//builder pattern /fluent pattern; 

sayHai()
    .then(response => log(response)) //succces/resolve

getError()
    .then(response => log(response))
    .catch(error => log(error));

validate()
    .then(response => log(response))
    .catch(error => log(error));


validate('foo','foo')
    .then(response => log(response))
    .catch(error => log(error));

console.log('end')
