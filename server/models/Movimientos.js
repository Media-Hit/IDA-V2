const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Movimientos = sequelize.define(
    "Movimientos",
    {
      id_movimiento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      indole: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  Movimientos.associate = (models) => {
    Movimientos.hasMany(sequelize.models.Egresos, {
      foreignKey: "id_movimiento",
    });
  };

  return Movimientos;
};
