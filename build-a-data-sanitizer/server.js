import express from "express";
import { inputCleaner, inputValidator } from "./middleware.js";
import { fileURLToPath } from "url";
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.redirect("/form");
});

app.get("/form", (req, res) => {
    res.sendFile(fileURLToPath(new URL("./public/index.html", import.meta.url)));
});

app.use(express.static("public"));

app.post("/submit", inputCleaner, inputValidator, (req, res) => {
    res.json({
        username: req.body.username,
        comment: req.body.comment
    });
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});