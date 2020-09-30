const http = require('http');


//create Server
const server = http.createServer((request, response) => {
    response.write('Hello');
    response.end();
    //response events
    response.on('close', () => {
        console.log('response close event')
    })
    response.on('finish', () => {
        console.log('response finish event')
    })
})

//start the server
let port = 3001;
server.listen(port, () => {
    console.log('opened server on', server.address());
});
//attach and listen for server events
server.on('request', (request, response) => {
    console.log(`${request.url} - ${request.method} ${new Date()} `)
});