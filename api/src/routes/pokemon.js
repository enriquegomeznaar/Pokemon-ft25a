const { Router } = require("express");
const { getAllPokemons, getPokemonByName } = require("../Controllers/pokemon");

const router = Router();

router.get("/", getAllPokemons);
router.get("/name", getPokemonByName);

module.exports = router;
