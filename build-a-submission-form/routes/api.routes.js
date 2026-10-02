import {Router} from "express";
const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("API is available!");
});
router.get("/crash", (req, res, next) => {
    next(new Error("Database connection failed."))
});

export default router;