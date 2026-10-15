import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    fs.readFile("./public/index.html", "utf-8", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});