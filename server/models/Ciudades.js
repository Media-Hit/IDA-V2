const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Ciudades = sequelize.define(
    "Ciudades",
    {
      id_ciudad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Ciudades.associate = (models) => {
    Ciudades.hasOne(sequelize.models.Clientes, {
      foreignKey: "id_ciudad",
    });
  };

  return Ciudades;
};
