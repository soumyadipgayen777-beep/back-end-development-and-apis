import http from 'http';
import fs from 'fs';
import { WebSocketServer } from 'ws';

const PORT = 3001;

const server = http.createServer((req, res) => {
    fs.readFile("./public/index.html", "utf-8", (err, data) => {
        if(err){
            console.error("Error:", err.message);
        }else{
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(data);
        }
    });
});
