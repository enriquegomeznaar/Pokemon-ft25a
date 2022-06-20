const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      // default value,
      allowNull: false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stats: {
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
  });
};

// ID *, NOMBRE *, VIDA, ATAQUE, DEFENSA, VELOCIDAD, ALTURA, PESO
// RELACIÓN MUCHAS A MUCHAS
