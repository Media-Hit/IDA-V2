const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const CategoriasProyectos = sequelize.define(
    "CategoriasProyectos",
    {
      id_categoriaProyecto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  CategoriasProyectos.associate = (models) => {
    CategoriasProyectos.hasMany(sequelize.models.Proyectos, {
      foreignKey: "id_categoriaProyecto",
    });
  };

  return CategoriasProyectos;
};
