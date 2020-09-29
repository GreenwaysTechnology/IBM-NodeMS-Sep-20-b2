const { findAll, save } = require('./services/ProductService');

const {log} = console;

findAll().forEach(product => console.log(product));
findAll().forEach(product => log(product));
//looks like java method refence syntax.
findAll().forEach(log);
