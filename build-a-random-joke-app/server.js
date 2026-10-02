const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to the Random Joke Server! Visit /joke to get a random joke.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});