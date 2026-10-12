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
    } catch (err) {
        next(err);
    }
});

app.get("/accounts/:id", async (req, res, next) => {
    try {
        const accounts = await getAccounts();
        const account = accounts.find((a) => a.id === parseInt(req.params.id));

        if (!account) {
            const err = new Error("Account not found");
            err.status = 404;
            throw err;
        }

        res.json(account);
    } catch (err) {
        next(err);
    }
});

app.post("/transfer", async (req, res, next) => {
    try {
        const { fromId, toId, amount } = req.body;

        if (!fromId || !toId || !amount) {
            const err = new Error("Missing required fields: fromId, toId, amount");
            err.status = 400;
            throw err;
        }

        if (amount <= 0) {
            const err = new Error("Transfer amount must be positive");
            err.status = 400;
            throw err;
        }

        const accounts = await getAccounts();
        const sender = accounts.find((a) => a.id === fromId);

        if (!sender) {
            const err = new Error("Sender account not found");
            err.status = 404;
            throw err;
        }

        const recipient = accounts.find((a) => a.id === toId);

        if (!recipient) {
            const err = new Error("Recipient account not found");
            err.status = 404;
            throw err;
        }

        if (sender.balance < amount) {
            const err = new Error("Insufficient funds");
            err.status = 409;
            throw err;
        }

        sender.balance -= amount;
        recipient.balance += amount;

        await saveAccounts(accounts);

        res.json({
            message: "Transfer successful",
            senderName: sender.owner,
            recipientName: recipient.owner,
            amountTransferred: amount,
            senderNewBalance: sender.balance,
            recipientNewBalance: recipient.balance,
        });

    } catch (err) {
        next(err);
    }
})

app.listen(PORT, () => {
    console.log(`Tiny Bank API running on http://localhost:${PORT}...`);
});