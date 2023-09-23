const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Cuentas = sequelize.define("Egresos_Categorias", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    es_hijo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    padre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Cuentas;
};
