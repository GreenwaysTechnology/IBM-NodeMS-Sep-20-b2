//node built in modules; os module
const {cpus,arch} = require('osxx');

console.log('Total CPUs')
console.log(cpus());
console.log('Arch ',arch())