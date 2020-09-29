
//emit timer event periodically 
const { log } = console;
const hearBeat = hanlder => {
    let timerId = setInterval(hanlder, 1000, 'hello');
    setTimeout(() => {
        log('Stopping interval')
        clearInterval(timerId)
    }, 5000)

};

function start() {
    hearBeat(now => log(now));
}
start();