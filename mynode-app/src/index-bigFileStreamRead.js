//file system stream;
const fs = require('fs')
const path = require('path');
const { log } = console;


const fileName = path.join(__dirname, 'assets/big.file');
const config = {
    encoding: 'UTF-8'
}
//read stream
const inputStream = fs.createReadStream(fileName, config);
//data reterival you can do in two places; inside data event , or end event.
//register events
//data event
let data = '';
inputStream.on('data', chunk => {
    log(`Received ${chunk.length} bytes of data.`)
    //log(chunk);
    data += chunk;
});
inputStream.on('end', () => {
    log('There will be no more data to read!');
    //log(data)
});
//error event: for error handling
inputStream.on('error', function (err) {
    log(`Some thing went wrong! ${err}`)
});