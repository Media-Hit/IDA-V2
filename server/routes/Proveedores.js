const express = require("express");
const router = express.Router();
const { Proveedores } = require("../models");

router.get("/listado", async (req, res) => {
  const listOfProveedores = await Proveedores.findAll({
    attributes: ["nombre"],
  });
  res.json(listOfProveedores);
});

module.exports = router;
