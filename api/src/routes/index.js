const { Router } = require('express');
const router = Router();

const { getPokemons, getPokemonById, getTipos, postPokemon } = require('../controllers/index.js')

// endpoints de mi servidor/backend. es decir, a donde los links de mi front-end deben guiar.
router.get('/pokemons', getPokemons);  //Ruta 1
router.get('/pokemons/:idPokemon', getPokemonById);  //Ruta 2

router.post("/pokemons", postPokemon); //Ruta 4
router.get('/types', getTipos); //Ruta 5


module.exports = router;