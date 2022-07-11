const axios = require("axios");
const { Pokemon, Types } = require("../db");
const API_URL_POKES = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
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
  try {
    const dbPokes = await Pokemon.findAll({
      include: {
        model: Types,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    const pokeDbInfo = dbPokes.map((p) => pokeDbTemplate(p));
    return pokeDbInfo;
  } catch (error) {
    console.log(error);
  }
}
async function getAllPokemons() {
  try {
    const apiData = await getAllApi();
    const dBData = await getAllDB();
    const apiDB = apiData.concat(dBData);
    // console.log("apiDB", apiDB);
    return apiDB;
  } catch (error) {
    console.log(error);
  }
}

const pokeApiTemplate = (poke) => {
  return {
    id: poke.id,
    name: poke.name,
    height: poke.height,
    weight: poke.weight,
    hp: poke.stats[0].base_stat,
    speed: poke.stats[5].base_stat,
    strength: poke.stats[1].base_stat,
    defense: poke.stats[2].base_stat,
    type: poke.types.map((t) => t.type.name),
    image: poke.sprites.other.home.front_default,
  };
};
const pokeDbTemplate = (poke) => {
  return {
    id: poke.id,
    name: poke.name,
    height: poke.height,
    weight: poke.weight,
    hp: poke.hp,
    speed: poke.speed,
    strength: poke.strength,
    defense: poke.defense,
    type: poke.type.map((e) => e.name),
    image: poke.image,
  };
};

async function getDbPokeByName(name) {
  try {
    let dbPokeByName = await Pokemon.findAll({
      where: { name },
      include: { model: Types },
    });
    if (dbPokeByName.length === 0) {
      return "PDNE";
    }

    let resp = dbPokeByName.map((e) => pokeDbTemplate(e));
    return resp;
  } catch (e) {
    /* console.log(e) */
    return "PDNE";
  }
}

async function getApiPokeByName(name) {
  try {
    const getApiPokeByName = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    let pokeInfo = getApiPokeByName.data
      ? pokeApiTemplate(getApiPokeByName.data)
      : "PDNE";
    return pokeInfo;
  } catch (error) {
    console.log(error);
    return "PDNE";
  }
}
//  Get pokemon por nombre (query).

async function getPokemonName(name) {
  
  //  console.log("pokemonsTotal", pokemonsTotal)
  if (name) {
    let apiResult = await getApiPokeByName(name);
    let dbResult = await getDbPokeByName(name);

    if (apiResult === "PDNE" && dbResult === "PDNE") {
      return ["PDNE"];
    }
    if (apiResult === "PDNE" && dbResult !== "PDNE") {
      return dbResult;
    }
    if (apiResult !== "PDNE" && dbResult === "PDNE") {
      return [apiResult];
    }
    if (apiResult !== "PDNE" && dbResult !== "PDNE") {
      let chorro = [apiResult, ...dbResult];
      return chorro;
    }
  }
}

async function getPokemonByName(req,res) {
  const { name } = req.query;
  try {
    var pokemonsName = await getPokemonName(name)
    // .filter((el) =>
    //   el.name.toLowerCase().includes(name.toLowerCase())
    // );
    pokemonsName.length
      ? res.status(200).send(pokemonsName)
      : res.status(404).send("No se encontro el pokemon ingresado...");
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
