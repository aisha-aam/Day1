const util = require('util');

const text = 'Hello %s, you are %d years old';

console.log(util.format(text, 'Aisha', 20));