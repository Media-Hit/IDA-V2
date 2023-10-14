const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Proveedores = sequelize.define(
    "Proveedores",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      razon_social: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tipo_de_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tax_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pais: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      codigo_actividad: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      retencion_del_proveedor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      reteica_del_proveedor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      banco: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tipo_de_cuenta: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      numero_de_cuenta: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Proveedores;
};
