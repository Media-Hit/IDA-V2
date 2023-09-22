const express = require("express");
const router = express.Router();
const { Cuentas } = require("../models");

router.get("/", async (req, res) => {
  const listOfCuentas = await Cuentas.findAll();
  res.json(listOfCuentas);
});

router.post("/nueva-cuenta", async (req, res) => {
  const cuenta = req.body;
  await Cuentas.create(cuenta);
  res.json(cuenta);
});

module.exports = router;
