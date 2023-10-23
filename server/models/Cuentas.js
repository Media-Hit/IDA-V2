const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Cuentas = sequelize.define(
    "Cuentas",
    {
      id_cuenta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
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

  Cuentas.associate = (models) => {
    Cuentas.hasMany(sequelize.models.Movimientos, {
      foreignKey: "id_cuenta",
    });
  };

  return Cuentas;
};
