const { Router } = require('express');
const axios = require('axios');
const { getAllApiPokes, pokeApiTemplate} = require('../Controllers/pokemon')




const router = Router();
router.get('/', getAllApiPokes);




module.exports = router;