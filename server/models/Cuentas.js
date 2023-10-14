const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Cuentas = sequelize.define(
    "Cuentas",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo_de_cuenta: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      moneda: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Cuentas;
};
