const { Router } = require("express");
const {
  getAllPokemons,
  getPokemonByName,
  postPokemon,
  getPokemonById
} = require("../Controllers/pokemon");

const router = Router();

router.get("/", async (req,res)=> {res.status(200).send(await getAllPokemons())});
router.get("/search", getPokemonByName);
router.get("/:id", getPokemonById)
router.post("/", postPokemon);

module.exports = router;
