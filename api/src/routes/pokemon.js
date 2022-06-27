const { Router } = require("express");
const {
  getAllPokemons,
  getPokemonByName,
  postPokemon,
  getPokemonById
} = require("../Controllers/pokemon");

const router = Router();

router.get("/", getAllPokemons);
router.get("/search", getPokemonByName);
router.get("/:id", getPokemonById)
router.post("/", postPokemon);

module.exports = router;
