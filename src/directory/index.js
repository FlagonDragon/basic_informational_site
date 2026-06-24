import { createRequire } from "module";
const require = createRequire(import.meta.url);
import fs from 'node:fs';

var http = require('http');

function onRequest(request, response) {
  fs.readFile('./index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(data);
    return;
  });

  // response.end("Hello World 8080!!!\n");
}

function onRequest2(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World 8000!!!\n");
}

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(onRequest);
var server2 = http.createServer(onRequest2);

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8080);
// server2.listen(8000);

