const querystring = require('querystring');

const data = querystring.parse('name=Aisha&age=20&track=Angular');

console.log(data);
console.log('Name:', data.name);
console.log('Track:', data.track);