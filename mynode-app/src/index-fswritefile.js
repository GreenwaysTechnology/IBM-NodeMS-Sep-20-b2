//how to read and write files in non blocking way.

const fs = require('fs');

let filePath = './src/assets/info-copy.txt';
let config = {
    encoding: 'UTF-8'
};
console.log('start')
let data = 'Hello,How are you?'
fs.writeFile(filePath, data, config, (err) => {
    if (err) throw err;
    console.log('file has been written');
});
console.log('endl')

