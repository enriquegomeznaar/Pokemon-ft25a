const axios = require("axios");
const { Types } = require("../db");


// Obtener todos los tipos de pokemons posibles
async function getAllToBD(){
    try {
      var types = (await axios.get("https://pokeapi.co/api/v2/type")).data.results.map(p=>({
        name: p.name
      }))
      await Types.bulkCreate(types)
      console.log("Tipos cargados en BD correctamente")
    } catch (error) {
        console.log(error)
    }
    // console.log(types);
  }

module.exports={
    getAllToBD
}  