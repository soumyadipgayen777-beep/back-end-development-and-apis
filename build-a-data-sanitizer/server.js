import express from "express";
import { inputCleaner, inputValidator } from "./middleware.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.redirect("/form");
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});