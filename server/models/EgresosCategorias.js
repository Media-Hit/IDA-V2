const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const EgresosCategorias = sequelize.define("Egresos_Categorias", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    es_padre: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    es_hijo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    padre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return EgresosCategorias;
};
