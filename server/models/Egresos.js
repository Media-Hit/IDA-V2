const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
 
    const Egresos = sequelize.define("Egresos", {
    fecha: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    proveedor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    proyecto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo_de_gasto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    subtotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    iva: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    impoconsumo: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    retefuente: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    reteica: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    costo_transaccion: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    cuatro_x_mil: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
 })

 return Egresos
}
