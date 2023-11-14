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
      fecha: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      pagado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      subtotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );

  return Egresos;
};
