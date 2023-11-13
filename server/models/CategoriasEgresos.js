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
      categoria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subcategoria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      son_varios: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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
