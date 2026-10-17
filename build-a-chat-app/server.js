import http from 'http';
import fs from 'fs';
import { WebSocketServer } from 'ws';

const PORT = 3001;

const server = http.createServer((req, res) => {
    fs.readFile("./public/index.html", "utf-8", (err, data) => {
        if (err) {
            console.error("Error:", err.message);
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(data);
        }
    });
});

const wss = new WebSocketServer({ server });

wss.on("connection", (socket, req) => {
    const username = new URL(req.url, "http://localhost").searchParams.get(
        "username",
    );
    for(const client of wss.clients){
        if(client.readyState === WebSocket.OPEN){
            client.send(JSON.stringify({
                "type": "system",
                "text":  `${username} joined`
            }));
        }
    }
    socket.on("message", (message) => {
        const data = JSON.parse(message.toString());
        for(const client of wss.clients){
        if(client.readyState === WebSocket.OPEN){
            client.send(JSON.stringify({
                "type": "chat",
                "username": data.username,
                "text": data.text
            }));
        }
    }});
    socket.on("close", () => {
        for(const client of wss.clients){
            if(client.readyState === WebSocket.OPEN){
                client.send(JSON.stringify({
                    "type": "system",
                    "text": `${username} left`
                }));
            }
        }
    });
});