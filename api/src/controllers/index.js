const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2';
const { Pokemon, Tipo, pokeTipos } = require('../db.js');  // importé los modelos para poder alterarlos


const getPokemons = async (req, res) => {
    try {
        const { data } = await axios.get(`${URL}/pokemon?limit=5`);
        const lista = data.results;
        let urls = data.results.map((poke) => {
            return poke.url
        })


        console.log(urls);

        res.json(data)
    } catch (err) {
        res.json(err)
    }
}

const getOnePokemon = async (req, res) => {
    const { distinct } = req.params
    try {
        const { data } = await axios.get(`${URL}/pokemon/${distinct}`);
        const picking = {
            ID: data.id,
            nombre: data.name,
            vida: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            altura: data.height,
            peso: data.weight
        }
        // console.log(picking)
        res.json(picking)

    } catch (err) {
        res.json(err)
    }
}

const getTipos = async (req, res) => {
    try {
        const { data } = await axios.get(`${URL}/type`);
        res.json(data)
    } catch (err) {
        res.json(err)
    }
}

const postPokemon = async (req, res) => {
    const { nombre, vida, ataque, defensa, velocidad, altura, peso } = req.body;
    try {
        const newPokemon = await Pokemon.create({
            nombre, vida, ataque, defensa, velocidad, altura, peso
        })
        res.json(newPokemon)
    } catch (error) {
        res.send(error)
    }
}

// rutas posibles a la api
// GET https://pokeapi.co/api/v2/pokemon
// GET https://pokeapi.co/api/v2/pokemon/{id}
// GET https://pokeapi.co/api/v2/pokemon/{name}
// GET https://pokeapi.co/api/v2/type


// para alterar la tabla intermedia : martina 2;40
// set -  borra y pisa.
// add  -- agrega sobre lo que tiene

// join: martina 2:52

// order: 2:04


module.exports = { getPokemons, getOnePokemon, getTipos, postPokemon };