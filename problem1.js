const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  var currentDate = new Date();
  var age = currentDate.getFullYear() - queryObject.year;
  var m = currentDate.getMonth() + 1 - queryObject.month;
  if (m < 0 || (m === 0 && currentDate.getDate() < queryObject.date)) {
    age--;
  }
  res.write('<p>' + 'Hello ' + queryObject.name + '</p>');
  res.write('<p>' + 'You are Currently ' + age + ' years old' + '</p>');
});
server.listen(8080);