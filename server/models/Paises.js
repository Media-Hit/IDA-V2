const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Paises = sequelize.define(
    "Paises",
    {
      id_pais: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pais: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Paises.associate = (models) => {
    Paises.hasMany(sequelize.models.Ciudades, {
      foreignKey: "id_pais",
    });
  };

  return Paises;
};
