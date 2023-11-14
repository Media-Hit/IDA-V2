const express = require("express");
const router = express.Router();
const { Proyectos } = require("../models");

router.get("/list", async (req, res) => {
  const listOfProyectos = await Proyectos.findAll({
    attributes: ["nombre"],
  });
  res.json(listOfProyectos);
});

router.post("/nuevo", async (req, res) => {
  const proyecto = req.body;
  await Proyectos.create(proyecto);
  res.json(proyecto);
});

module.exports = router;
