const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    id: {
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true, 
    },
    image: {
			type: DataTypes.STRING,
			allowNull: true,
		},
    heightMin: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		heightMax: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		weightMin: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		weightMax: {
			type: DataTypes.STRING,
			allowNull: false,
		},
    lifeSpan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bredFor: {
			type: DataTypes.STRING,
			allowNull: true,
		}, 
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },{timestamps: false}); 
};
