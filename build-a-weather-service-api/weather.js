import express from "express";
const router = express.Router();
const SUPPORTED_CITIES = ['London', 'Tokyo', 'Los angeles'];

router.get("/", (req, res) => {
    res.json({
        supported_cities: SUPPORTED_CITIES
    });
});

router.get("/:city", async (req, res) => {
    const { city } = req.params;
    const response = await fetch(
        `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );
    const data = await response.json();
    res.json({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
    });

});

export default router;