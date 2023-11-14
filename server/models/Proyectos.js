const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Proyectos = sequelize.define(
    "Proyectos",
    {
      id_proyecto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  Proyectos.associate = (models) => {
    Proyectos.hasOne(sequelize.models.Facturas, {
      foreignKey: "id_proyecto",
    });
  };

  return Proyectos;
};
