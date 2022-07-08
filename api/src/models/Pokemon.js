const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ph: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    image:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdInDb:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull:true,
    },
  });
};

// ID *, NOMBRE *, VIDA, ATAQUE, DEFENSA, VELOCIDAD, ALTURA, PESO
// RELACIÓN MUCHAS A MUCHAS
