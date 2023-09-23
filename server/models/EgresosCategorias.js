const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const EgresosCategorias = sequelize.define("Egresos_Categorias", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    es_padre: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
    es_hijo: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
    padre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return EgresosCategorias;
};
