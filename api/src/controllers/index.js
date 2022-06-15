const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2';
const { Pokemon, Tipo, pokeTipos } = require('../db.js');  // importé los modelos para poder alterarlos

// FUNCION RUTA 1 y 3  
const getPokemons = async (req, res) => {
    const { name } = req.query;

    if (name) {  //MANEJO DE RUTA 3
        try {
            const { data } = await axios.get(`${URL}/pokemon/${name}`);  // DRY (ojo)
            const picking = {
                ID: data.id,
                nombre: data.name,
                vida: data.stats[0].base_stat,
                ataque: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                velocidad: data.stats[5].base_stat,
                altura: data.height,
                peso: data.weight,
                tipos: data.types,
                img: data.sprites.front_default
            }
            res.json(picking)
        } catch (err) {
            res.json(err)
        }
    } else {   // MANEJO DE RUTA 1
        try {
            const { data } = await axios.get(`${URL}/pokemon?limit=5`);
            const lista = data.results;
            const urls = data.results.map((poke) => {
                return poke.url
            })
            res.json(urls)
        } catch (err) {
            res.json(err)
        }
    }
}

// FUNCION RUTA 2
const getOnePokemon = async (req, res) => {
    const { idPokemon } = req.params;
    try {
        console.log("aca empiezan los PARAMS PARAMS PARAMS");
        console.log(req);
        const { data } = await axios.get(`${URL}/pokemon/${idPokemon}`);
        const picking = {
            ID: data.id,
            nombre: data.name,
            vida: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            velocidad: data.stats[5].base_stat,
            altura: data.height,
            peso: data.weight,
            tipos: data.types,
            img: data.sprites.front_default
        }
        res.json(picking)

    } catch (err) {
        res.json(err)
    }
}

// FUNCION RUTA 5
const getTipos = async (req, res) => {
    try {
        const { data } = await axios.get(`${URL}/type`);
        res.json(data)
    } catch (err) {
        res.json(err)
    }
}

// FUNCION RUTA 4
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

const getPrueba = (req, res) => {
    res.json("se obtuv")
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


// module.exports = { getPokemons, getOnePokemon, getTipos, postPokemon, getPrueba };
module.exports = { getPrueba, getPokemons, getOnePokemon, getTipos, postPokemon };