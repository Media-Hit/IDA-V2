const express = require("express");
const router = express.Router();
const { Cuentas } = require("../models");

router.get("/", async (req, res) => {
  const listOfCuentas = await Cuentas.findAll();
  res.json(listOfCuentas);
});

router.get("/listado", async (req, res) => {
  const listOfCuentas = await Cuentas.findAll({
    attributes: ["nombre"], // Esto selecciona solo la columna 'nombre'
  });
  res.json(listOfCuentas);
});

// router.get("/", async (req, res) => {
//   // Consulta solo los nombres de las cuentas
//   const listOfCuentas = await Cuentas.findAll({
//     attributes: ["nombre"], // Esto selecciona solo la columna 'nombre'
//   });
// });

router.post("/nueva-cuenta", async (req, res) => {
  const cuenta = req.body;
  await Cuentas.create(cuenta);
  res.json(cuenta);
});

module.exports = router;
