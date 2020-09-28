//how to pass function as parameter to another function;

function add(a, b) {
    let result = a + b;
    console.log(result)
}
//pass inline direct values
add(10, 10);
let x = 10;
let y = 20;
add(x, y);

//function as parameter
function handle(handler) {
    handler();
}
let socketHandler = function () {
    console.log('socket handler')
};
handle(socketHandler);
handle(function () {
    console.log('socket handler')
});

//function as parameter with args and parameters

function requestHandler(handle) {
    let fakeResponse = 'Hey, this is fake response!!!';
    let status = handle(fakeResponse);
    status ? console.log('response committed') : console.log('response commit failed')
}

let httpHandler = function (response) {
    console.log(response)
    return true;
};
requestHandler(httpHandler);
requestHandler(function (response) {
    console.log(response)
    return true;
});