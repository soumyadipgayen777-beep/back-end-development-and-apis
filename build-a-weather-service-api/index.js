import express from "express";
const app = express();
const PORT = 3000;

app.get("/api/info", (req, res) => {
    res.json({
        name: "Weather Service API"
    });
});

app.listen(PORT, () => {});