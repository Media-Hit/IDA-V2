const express = require("express");
const router = express.Router();
const { Proyectos } = require("../models");

router.get("/listado", async (req, res) => {
  const listOfProyectos = await Proyectos.findAll({
    attributes: ["nombre"],
  });
  res.json(listOfProyectos);
});

module.exports = router;
