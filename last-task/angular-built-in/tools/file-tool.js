const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test.txt');

fs.writeFileSync(filePath, 'Hello from Angular CLI');

console.log('File created successfully');
console.log(filePath);