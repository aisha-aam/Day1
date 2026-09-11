const url = require('url');

const myUrl = new URL(
  'https://example.com/products?id=10&name=book'
);

console.log('Protocol:', myUrl.protocol);
console.log('Host:', myUrl.host);
console.log('Path:', myUrl.pathname);
console.log('ID:', myUrl.searchParams.get('id'));
console.log('Name:', myUrl.searchParams.get('name'));