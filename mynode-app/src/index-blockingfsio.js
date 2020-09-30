//blocking version.

//blocking io
const fs = require('fs');

const path = './src/assets/info.txt'
const Writepath = './src/assets/greetings.txt'

const options = {
    encoding: 'UTF-8'
}
console.log('start')
const fileContent = fs.readFileSync(path, options);
console.log(fileContent);
//write file
fs.writeFileSync(Writepath,"Hello!!",options);

console.log('end')