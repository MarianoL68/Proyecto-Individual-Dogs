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
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    height: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    weight: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    lifespan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
