import express from "express";

const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
    res.send('Tiny Bank API running...');
});

app.listen(PORT, () => {
    console.log(`Tiny Bank API running on http://localhost:${PORT}...`);
});