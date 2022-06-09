const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Traer la lógica
const {getPokemons, getOnePokemon, getTipos, postPokemon } = require('../controllers/index.js')

// endpoints de mi servidor/backend. es decir, a donde los links de mi front end deben guiar.
router.get('/pokemons', getPokemons);
router.get('/pokemon/:distinct', getOnePokemon );
router.get('/poketipos', getTipos );

router.post("/pokemon", postPokemon);


module.exports = router;
