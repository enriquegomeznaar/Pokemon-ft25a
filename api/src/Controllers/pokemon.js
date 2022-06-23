const axios = require("axios");
const { Pokemon, Types } = require("../db");
const API_URL_POKES = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
const { Router } = require("express");
const router = Router();

// 1. Get pokemon (imagen, nombre, tipo)

async function getAllApi() {
  const getApiInfo = await axios.get(`${API_URL_POKES}`);
  //console.log(getApiInfo)
  const apiInfo = getApiInfo.data.results;
  //console.log(apiInfo);
  const poke = apiInfo.map((e) => axios.get(e.url));
  //console.log(poke);
  const urlInfo = await axios.all(poke);
  //console.log(urlInfo)
  const pokesInfo = urlInfo.map((d) => d.data);
  //console.log(pokesInfo)
  const pokesDetail = pokesInfo.map((p) => {
    return {
      id: p.id,
      image: p.sprites.other.home.front_default,
      type: p.types.map((t) => t.type.name),
      name: p.name,
      hp: p.stats[0].base_stat,
      strength: p.stats[1].base_stat,
      defense: p.stats[2].base_stat,
      speed: p.stats[5].base_stat,
      height: p.height,
      weight: p.weight,
    };
  });
  //console.log(pokesDetail)
  return pokesDetail;
}


async function getAllDB() {
  return await Pokemon.findAll({
    include: {
      model: Types,
      attributes: ["type"],
      through: {
        attributes: [],
      },
    },
  });
}
async function getAllPokemons() {
  const apiData = await getAllApi();
  const dBData = await getAllDB();
  const apiDB = apiData.concat(dBData);
  return apiDB;
  //console.log(apiDB)
}


//  Get pokemon por nombre (query).

async function getPokemonByName(req, res, next) {
  const name = req.query.name;
  const pokemonsTotal = await getAllPokemons();
  if (name) {
    var pokemonsName = await pokemonsTotal.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    pokemonsName.length
      ? res.status(200).send(pokemonsName)
      : res.status(404).send("No se encontro el Pokemon ingresado...");
  } else{
    res.status(200).send(pokemonsTotal)
  }
  // console.log(name)
}

// Obtener todos los tipos de pokemons posibles
async function getAllToBD(){
  try {
    let types = (await axios.get("https://pokeapi.co/api/v2/type")).data.results.map(p=>({
      name: p.name
    }))
    await Types.bulkCreate(types)
    console.log("Tipos cargados en BD correctamente")
  } catch (error) {
      console.log(error)
  }
  console.log(types);
}

// 2. Get pokemon por id ( .Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
//                      .Número de Pokemon (id)
//                      .Estadísticas (vida, ataque, defensa, velocidad)
//                      .Altura y peso)

// 4. Post pokemon

// module.exports de las funciones creadas
module.exports = {
  getAllPokemons,
  getPokemonByName,
};
