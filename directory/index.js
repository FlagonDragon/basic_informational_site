import { createRequire } from "module";
const require = createRequire(import.meta.url);
import fs from 'node:fs';

var http = require('http');

function onRequest(request, response) {

  if (request.url === '/') {

    fs.readFile('./index.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end(data);
      return;
    });

  } else if (request.url === '/about') {

    fs.readFile('./about.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end(data);
      return;
    });

  } else if (request.url === '/contact-me') {

    fs.readFile('./contact-me.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end(data);
      return;
    });

  } else {

    fs.readFile('./404.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end(data);
      return;
    });

  } 

}

var server = http.createServer(onRequest);

server.listen(8080);

