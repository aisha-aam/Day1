const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');

const server = http.createServer((req, res) => {

  if (req.url === '/api/info') {

    const filePath = path.join(__dirname, 'tools', 'test.txt');

    const data = {
      file: fs.existsSync(filePath),
      path: filePath,
      os: os.platform(),
      cpu: os.cpus().length,
      memory: os.freemem(),
      hash: crypto
        .createHash('sha256')
        .update('Hello Aisha')
        .digest('hex')
    };

    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    res.end(JSON.stringify(data));
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(3000, () => {
  console.log('Node server running on http://localhost:3000');
});