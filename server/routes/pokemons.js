const express = require('express');
const {getAllPokemons} = require('../controllers/allPokemons');
const {getPokemon} = require('../controllers/pokemon');

const router = express.Router();

router.route('/').get(getAllPokemons);
router.route('/:name').get(getPokemon);

module.exports = router;