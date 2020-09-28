const myInformation = require('./information.js');

const cowsay = require('cowsay');

console.log(
  cowsay.say({
    text: `${myInformation}`,
    e: 'oO',
    T: 'U ',
  })
);
