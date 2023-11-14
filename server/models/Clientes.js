const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define(
    "Clientes",
    {
      id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo_de_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tax_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Clientes.associate = (models) => {
    Clientes.hasMany(sequelize.models.Proyectos, {
      foreignKey: "id_cliente",
    });
  };

  Clientes.associate = (models) => {
    Clientes.hasMany(sequelize.models.Facturas, {
      foreignKey: "id_cliente",
    });
  };

  return Clientes;
};
