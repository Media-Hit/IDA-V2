const express = require("express");
const router = express.Router();
const { Egresos } = require("../models");

router.get("/egresos", async (req, res) => {
  const listOfEgresos = await Egresos.findAll();
  res.json(listOfEgresos);
});

router.post("/nuevo-egreso", async (req, res) => {
  const egreso = req.body;
  await Egresos.create(egreso);
  res.json(egreso);
});

module.exports = router;
