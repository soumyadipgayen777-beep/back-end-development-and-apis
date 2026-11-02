const http = require("http");

const server = http.createServer((request, response) => {});

server.listen(3001, () => {
    console.log('Connected to localhost (127.0.0.1) port 3001');
});