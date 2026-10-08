import express from "express";
import weatherRouter from "./weather.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

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

app.get("/docs", (req, res) => {
    res.redirect("/api/info");
});

app.get("/api/greet/:name", (req, res) => {
    const name = req.params.name;
    res.json({
        name: name
    });
});

app.route("/api/data")
    .get((req, res) => {
        res.json();
    })
    .post((req, res) => {
        res.status(201).json();
    });

app.use("/api/weather", weatherRouter);

app.listen(PORT, () => {});