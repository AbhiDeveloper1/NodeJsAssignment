const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  if (req.url == '/vegetables') {
    fs.readFile('vaggie.json', 'utf-8', (err, data) => {
      res.statusCode = 200;
      res.end(data);
    });
  }
});
server.listen(8080, () => {
  console.log('listening data port number 8080');
});