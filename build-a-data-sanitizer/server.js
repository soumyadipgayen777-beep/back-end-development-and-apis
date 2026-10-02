import express from "express";
import { inputCleaner, inputValidator } from "./middleware.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



app.listen(3000, () => {
    console.log("server is running on port 3000");
});