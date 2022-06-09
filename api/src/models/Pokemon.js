const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida: {
      type: DataTypes.STRING
    }, 
    ataque: {
      type: DataTypes.INTEGER
    }, 
    defensa: {
      type: DataTypes.INTEGER
    },
    velocidad: {
      type: DataTypes.INTEGER
    },
    altura: {
      type: DataTypes.INTEGER
    },
    peso: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: false
  });
};

// le tengo que meter un get y set para que se guarde distinto al id de la api. y se obtenga igual.

