const http = require('http');

const routes = require('./routes');

const server = http.createServer(request);

server.listen(3000);
