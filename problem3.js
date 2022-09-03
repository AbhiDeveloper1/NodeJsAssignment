const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  var calc;
  res.writeHead('200', { 'Content-type': 'text/html' });
  if (queryObject.object == 'sphere') {
    if (queryObject.metric == 'volume') {
      calc = (4 / 3) * 3.14 * Math.pow(queryObject.radius, 3);
      res.end('<p>' + 'Volume of Sphere is ' + calc + '</p>');
    } else if (queryObject.metric == 'surfaceArea') {
      calc = 4 * 3.14 * Math.pow(queryObject.radius, 2);
      res.end('<p>' + 'Surface Area of Sphere is ' + calc + '</p>');
    } else {
      res.end('<p>' + 'Value is not found' + '</p>');
    }
  } else if (queryObject.object == 'circle' && queryObject.metric == 'area') {
    calc = 3.14 * Math.pow(queryObject.radius, 2);
    res.end('<p>' + 'Area of Circle is ' + calc + '</p>');
  } else {
    res.end('<p>' + 'Value is not found' + '</p>');
  }
});
server.listen(8080, () => {
  console.log('Server is running on 8080')
});