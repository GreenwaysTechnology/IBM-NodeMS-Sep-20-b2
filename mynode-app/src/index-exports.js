//. - current dir, mylib is js file to be linked
// let res = require('./mylib')

// console.log(res)
// console.log(res.greet)
// console.log(res.name)
// console.log(res.isActive)
const { greet, name, isActive, skills, score, sayHai, address } = require('./mylib')
const { log } = console;
log(greet)
log(name)
log(isActive)
log(skills)
log(score);
log(sayHai())
log(address.city)