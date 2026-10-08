import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to our weather service api");
});

app.get("/api/info", (req, res) => {
    res.json({
        name: "Weather Service API"
    });
});

app.get("/api/status", (req, res) => {
    res.status(200).json({
        status: 200
    });
});

app.listen(PORT, () => {});