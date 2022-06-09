const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Tipo', {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true 
        },
        nombre: {
            type: DataTypes.STRING
        }
    }, 
    {
        timestamps: false
    });
};

