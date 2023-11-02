const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const CategoriasEgresos = sequelize.define(
    "CategoriasEgresos",
    {
      id_categoriaEgresos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      es_padre: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      es_hijo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      padre: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  CategoriasEgresos.associate = (models) => {
    CategoriasEgresos.hasMany(sequelize.models.Egresos, {
      foreignKey: "id_categoriaEgresos",
    });
  };

  return CategoriasEgresos;
};
