const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Movimientos = sequelize.define(
    "Movimientos",
    {
      id_del_movimiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tipo_de_movimiento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Movimientos;
};
