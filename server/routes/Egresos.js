const express = require('express');
const router = express.Router();
const { Egresos } = require("../models")

router.get("/movimientos", (req, res) => {
    res.json("Hello World");
});

router.post("/nuevo-egreso", async (req, res) => {
    const egreso = req.body;
    await Egresos.create(egreso);
    res.json(egreso);
});




module.exports = router;