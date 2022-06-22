const { Router } = require("express");
const axios = require("axios");
const { getAllPokemons, getPokemonByName } = require("../Controllers/pokemon");

const router = Router();

router.get("/", getAllPokemons);
router.get("/name", getPokemonByName);

module.exports = router;
