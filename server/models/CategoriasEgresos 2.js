const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const CategoriasEgresos = sequelize.define(
    "CategoriasEgresos",
    {
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
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return CategoriasEgresos;
};
