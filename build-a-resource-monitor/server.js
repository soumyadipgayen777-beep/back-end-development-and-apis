import http from "http";
import fs from "fs";
import { WebSocketServer } from "ws";
const PORT = 3000;

const server = http.createServer((req, res) => {
    fs.readFile("./public/index.html", "utf-8", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});

const wss = new WebSocketServer({server});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});