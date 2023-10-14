const express = require("express");
const router = express.Router();
const { Movimientos } = require("../models");

router.get("/", async (req, res) => {
  const listOfMovimientos = await Movimientos.findAll();
  res.json(listOfMovimientos);
});

router.post("/nuevo-movimiento", async (req, res) => {
  const movimiento = req.body;
  await Movimientos.create(movimiento);
  res.json(movimiento);
});

module.exports = router;
