const axios = require("axios");
const { Pokemon, Types } = require("../db");
const API_URL_POKES = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12";
const { v4: uuidv4 } = require("uuid");
const { Router } = require("express");
const router = Router();

//  Get pokemon (imagen, nombre, tipo)

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
      attributes: ["name"],
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
  //console.log(apiDB);
  return apiDB;
}
// console.log(getAllPokemons())
// async function getAllPokemons (){
//   try{
//       const [pokesApi, pokesDb] = await Promise.all([getAllApi(), getAllDB()]);
//       return [...pokesApi, ...pokesDb];
//   }catch(e){
//       return e
//   }
  
// }



//  Get pokemon por nombre (query).

async function getPokemonByName(req, res) {
  const name = req.query.name;

  const pokemonsTotal = await getAllPokemons();
  // console.log(pokemonsTotal)
  if (name) {
    var pokemonsName = await pokemonsTotal.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    pokemonsName.length
      ? res.status(200).send(pokemonsName)
      : res.status(404).send("No se encontro el Pokemon ingresado...");
  } else {
    res.status(200).send(pokemonsTotal);
  }
}

// Get pokemon by id
async function getPokemonById(req, res) {
  const id = req.params.id;
  const pokemonTotal = await getAllPokemons();
  if (id) {
    const idPokemon = pokemonTotal.filter((el) => el.id == id);
    idPokemon.length
      ? res.status(200).json(idPokemon)
      : res.status(404).send("No se encontro el pokemon solicitado...");
  }
}

// Crear un pokemon.
async function postPokemon(req, res, next) {
  try {
    const {
      name,
      ph,
      strength,
      defense,
      speed,
      height,
      weight,
      image,
      createdInDb,
      type,
    } = req.body;

    let pokemonCreated = await Pokemon.create({
      id: uuidv4(),
      name,
      ph,
      strength,
      defense,
      speed,
      height,
      weight,
      image,
      createdInDb,
    });

    const typeBD = await Types.findAll({
      where: { name: name },
    });
    pokemonCreated.addType(typeBD);
    res.send(pokemonCreated);
  } catch (error) {
    next(error);
  }
}

// 2. Get pokemon por id ( .Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
//                      .Número de Pokemon (id)
//                      .Estadísticas (vida, ataque, defensa, velocidad)
//                      .Altura y peso)

// module.exports de las funciones creadas
module.exports = {
  getAllPokemons,
  getPokemonByName,
  postPokemon,
  getPokemonById,
};
