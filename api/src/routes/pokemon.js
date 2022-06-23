const { Router } = require("express");
const {
  getAllPokemons,
  getPokemonByName,
  postPokemon,
} = require("../Controllers/pokemon");

const router = Router();

router.get("/", getAllPokemons);
router.get("/name", getPokemonByName);
router.post("/", postPokemon);

module.exports = router;
