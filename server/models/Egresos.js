const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Egresos = sequelize.define(
    "Egresos",
    {
      id_egreso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_movimiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      proveedor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      subtotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Egresos;
};
