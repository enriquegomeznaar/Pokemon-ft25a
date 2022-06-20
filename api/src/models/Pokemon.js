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
    life: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    strength: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },
    defense: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },
    speed: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
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
    createdInDb:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull:false,
    },
  });
};

// ID *, NOMBRE *, VIDA, ATAQUE, DEFENSA, VELOCIDAD, ALTURA, PESO
// RELACIÓN MUCHAS A MUCHAS
