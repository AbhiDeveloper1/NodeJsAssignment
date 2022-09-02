const http = require("http");
const url = require("url");
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });//
  var queryObject = url.parse(req.url, true).query;// it take URL string parse it and it will return a URL object with each part of addressas properties.
  //age Calculation code
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var age = currentYear - queryObject.year;
  var m = currentDate.getMonth() - queryObject.getMonth();
  if (m < 0 || (m === 0 && currentDate.date < queryObject.getDate())) {
    age--;
  }
  res.write('<p>' + "Hello " + queryObject.name + '</p>');
  res.write('<p>' + "You are Currently " + age + " years old" + '</p>');
  res.end();
}).listen(8000);//