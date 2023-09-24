const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Proyectos = sequelize.define("Proyectos", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Proyectos;
};
