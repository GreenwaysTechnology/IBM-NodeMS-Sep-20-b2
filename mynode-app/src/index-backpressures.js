const fs = require('fs');
const path = require('path');

const inputfileName = path.join(__dirname, 'assets/big.file');
const outputfileName = path.join(__dirname, 'assets/big_copy.file');

const config = {
    encoding: 'UTF-8'
}

//Back pressure handling
const readerStream = fs.createReadStream(inputfileName, config);
const writeStr = fs.createWriteStream(outputfileName, config);


readerStream.on('data', function (chunk) {
    console.log(`Received ${chunk.length} bytes of data.`);
    /**
     * Returns: <boolean> false if the stream wishes for the calling code to
     *  wait for the 'drain' event to be emitted before continuing to 
     *  write additional data; otherwise true.
     */
    let buffer_good = writeStr.write(chunk);
    if (!buffer_good) readerStream.pause();
});
writeStr.on('drain', function () {
    console.log('buffer drained!');
    readerStream.resume();
});
readerStream.on('end', function () {
    //console.log(data);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});