const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Facturas = sequelize.define(
    "Facturas",
    {
      id_factura: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      identificador: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );

  Facturas.associate = (models) => {
    Facturas.hasOne(sequelize.models.Proyectos, {
      foreignKey: "id_factura",
    });
  };

  return Facturas;
};
