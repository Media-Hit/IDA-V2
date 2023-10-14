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
      // Configuración adicional del modelo
      timestamps: true, // Habilita la generación automática de 'createdAt' y 'updatedAt'

      // Define el valor predeterminado de 'createdAt' utilizando Sequelize.literal
      defaultScope: {
        attributes: {
          include: [
            [
              sequelize.literal("CURRENT_TIMESTAMP"), // Utiliza la función SQL para obtener la fecha y hora actual
              "createdAt",
            ],
          ],
        },
      },

      // Define el valor predeterminado de 'updatedAt' utilizando Sequelize.fn
      hooks: {
        beforeValidate: (instance, options) => {
          instance.updatedAt = sequelize.fn("NOW");
        },
      },
    }
  );

  // Movimientos.hasMany(sequelize.models.Egresos, {
  //   foreignKey: "movimientoId", // Nombre de la clave externa en la tabla Egresos
  //   as: "egresos", // Nombre del atributo para acceder a los egresos desde un objeto Movimientos
  // });

  return Movimientos;
};
