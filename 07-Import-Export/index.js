// Operator.js

const add = (a, b) => (a + b);
const sub = (a, b) => (a - b);
const mul = (a, b) => (a * b);
const div = (a, b) => (a / b);

module.exports = {add, sub, mul, div};


// Index.js

const {add, sub, mul, div} = require('./operator');

console.log(add(2, 3));
console.log(sub(5, 3));
console.log(mul(5, 2));
console.log(div(10, 2));

