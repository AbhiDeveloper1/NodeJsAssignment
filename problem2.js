const fs = require("fs");
const http = require("http");

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/json' })
  if (req.url === "/vagetable") {
    fs.readFile("vaggi.json", "utf-8", (err, data) => {
      res.end(data)
    })
  }
})
server.listen(3500, () => {
  console.log("listening data port number 3500");
});