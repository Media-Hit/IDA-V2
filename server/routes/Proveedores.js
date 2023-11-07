const express = require("express");
const router = express.Router();
const { Proveedores } = require("../models");

router.get("/listado", async (req, res) => {
  const listOfProveedores = await Proveedores.findAll({
    attributes: ["nombre"],
  });
  res.json(listOfProveedores);
});

router.post("/nuevo-proveedor", async (req, res) => {
  const proveedor = req.body;
  await Proveedores.create(proveedor);
  res.json(proveedor);
});

module.exports = router;
