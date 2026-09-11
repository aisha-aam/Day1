const crypto = require('crypto');

const hash = crypto
  .createHash('sha256')
  .update('Hello Aisha')
  .digest('hex');

console.log('Hash:', hash);
