//how to implement write stream
const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'assets/granis.txt');
const config = {
    encoding: 'utf8',
    flag: 'w'
};
const outputStream = fs.createWriteStream(fileName, config);

const grains = ['wheat', 'rice', 'oats'];

grains.forEach(item => {
    outputStream.write(item + "  ");
    console.log("Wrote: %s", item);
});

outputStream.close();

outputStream.on('close', () => {
    console.log('file has been closed ')
})