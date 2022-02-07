const http = require('http')

http.createServer(function(req, res) {
  rew.writeHead(200, {
    "Content-Type" : "text/html"
  })
  res.send("Hello World");
}).listen(8000)

console.log("running")
