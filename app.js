var router = require("./router.js");
//Problem:
//
//create a web server

var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000, '127.0.0.1');
console.log('Server running at http://<workspcae-url>/');
//Handle HTTP route GET / and /
