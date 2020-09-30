const http = require('http');


//create Server
const server = http.createServer((request, response) => {
    response.write('Hello');
    response.end();

})

//start the server
let port = 3001;
server.listen(port, () => {
    console.log('opened server on', server.address());
});
//attach and listen for server events
server.on('request',(request,response)=>{
    log(`${request.url} - ${request.method} ${new Date()} `)
});