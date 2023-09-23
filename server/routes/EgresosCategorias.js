const express = require("express");
const router = express.Router();
const { EgresosCategorias } = require("../models");

router.get("/", async (req, res) => {
  const listOfCategorias = await EgresosCategorias.findAll({
    attributes: ["nombre"],
  });
  res.json(listOfProveedores);
});

module.exports = router;
