app = require("express")
http = require("http")

http.createServer

const foo = function(req, res) {
  res.write('Hello world')
}

const server = http.createServer(foo)
server.listen(3000);
