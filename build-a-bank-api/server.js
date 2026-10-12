import express from "express";
import { getAccounts, saveAccounts } from "./db.js";

const app = express();
const PORT = 9000;

app.use(express.json());
app.set("json spaces", 2);

app.get("/", (req, res) => {
    res.send('Tiny Bank API running...');
});

app.get("/accounts", async (req, res, next) => {
    try {
        const accounts = await getAccounts();
        res.json(accounts);
    }catch(err){
        next(err);
    }
});

app.get("/accounts/:id", async(req, res, next) => {
    try{
        const accounts = await getAccounts();
        const account = accounts.find((a) => a.id === parseInt(req.params.id));

        if(!account){
            const err = new Error("Account not found");
            err.status = 404;
            throw err;
        }

        res.json(account);
    }catch(err){
        next(err);
    }
});

app.listen(PORT, () => {
    console.log(`Tiny Bank API running on http://localhost:${PORT}...`);
});