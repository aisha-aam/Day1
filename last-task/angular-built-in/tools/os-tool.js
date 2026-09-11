const os = require('os');

console.log('Operating System:', os.platform());
console.log('CPU:', os.cpus().length);
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());
console.log('Home Directory:', os.homedir());