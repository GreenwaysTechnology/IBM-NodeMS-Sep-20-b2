//data return in async ways

const { log } = console;

const delay = handler => {
    //once timeout return data back to callback function
    let fakeUser = {
        id: 1,
        name: 'admin'
    };
    //syntax -1
    // setTimeout(handler, 5000, fakeUser)
    //syntax-2
    setTimeout(() => {
        log('timeout happens')
        handler(fakeUser)
    }, 5000)
};
delay((fakeUser) => console.log(fakeUser))
delay(fakeUser => log(fakeUser))
delay(log);
