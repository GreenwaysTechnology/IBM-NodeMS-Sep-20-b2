//how to read and write files in non blocking way.

const fs = require('fs');

let filePath = './src/assets/info.txt';
let config = {
    encoding: 'UTF-8'
};
console.log('start')
fs.readFile(filePath, config, (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log('endl̥')

