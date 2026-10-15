import http from "http";
import fs from "fs";
import { WebSocketServer } from "ws";
import os from "os";
const PORT = 3000;

function getMetrics() {
  return {
    loadAvg: os.loadavg(),
    freeMemMB: (os.freemem() / 1024 / 1024).toFixed(0),
    totalMemMB: (os.totalmem() / 1024 / 1024).toFixed(0),
    memUsagePct: (
      ((os.totalmem() - os.freemem()) / os.totalmem()) *
      100
    ).toFixed(1),
  };
}


const server = http.createServer((req, res) => {
    fs.readFile("./public/index.html", "utf-8", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});

const wss = new WebSocketServer({ server });

wss.on("connection", (socket) => {
    console.log("Client connected");
    socket.on("message", (data) => {
        console.log("Received:", data.toString());
    });
    socket.on("close", () => {
        console.log("Client disconnected");
    });
    socket.on("error", (err) => {
        console.error("Socket error:", err);
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});