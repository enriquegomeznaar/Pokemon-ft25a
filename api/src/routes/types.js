const { Router } = require('express');
const { getAllToBD } = require('../Controllers/type');




const router = Router();

router.get('/', getAllToBD);



module.exports = router;