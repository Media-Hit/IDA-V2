const express = require("express");
const router = express.Router();
const { CategoriasEgresos } = require("../models");

router.get("/", async (req, res) => {
  const listOfCategorias = await CategoriasEgresos.findAll();
  res.json(listOfCategorias);
});

module.exports = router;
