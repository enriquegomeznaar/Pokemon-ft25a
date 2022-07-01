const { Router } = require('express');
const pokemon = require('./pokemon');
const types = require('./types');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemon);
router.use('/types', types);

module.exports = router;
