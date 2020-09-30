const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../assets/big.file')
const options = {
    encoding: 'UTF-8'
}
let inputStream = fs.createReadStream(filePath, options)
class FileService {
    constructor() {

    }
    readFile() {
        let data = ''
        inputStream.on('data', chunk => {
            data += chunk;
        });
        return new Promise((resolve, reject) => {
            inputStream.on('end', () => {
                resolve(data)
            });
            inputStream.on('error', (error) => {
                reject(error)
            });
        });
    }
}
module.exports = new FileService();