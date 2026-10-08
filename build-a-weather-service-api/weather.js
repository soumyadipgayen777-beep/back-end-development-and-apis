import express from "express";
const router = express.Router();
const SUPPORTED_CITIES = ['London', 'Tokyo', 'Los angeles'];

router.get("/", (req, res) => {
    res.json({
        supported_cities: SUPPORTED_CITIES
    });
});

export default router;