//non blocking apis

//blocking api
const hi = () => console.log('hai')

const sayHello = handler => {
    //non blocking api ;timer 
    //register a with timer event within event queue
    setTimeout(handler, 5000);
};
hi();
sayHello(() => {
    console.log('hey , how are you?')
});
sayHello(() => {
    console.log('hey , how are you?')
});
hi();