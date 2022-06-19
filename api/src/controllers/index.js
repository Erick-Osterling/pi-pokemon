const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2';
const { Pokemon, Tipo, pokeTipos } = require('../db.js');  // importé los modelos para poder alterarlos


// escoje la información que se necesita de los pokemons
const pickData = (data) => {   
    let pickedData = {
        ID: data.id,
        nombre: data.name,
        vida: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        velocidad: data.stats[5].base_stat,
        altura: data.height,
        peso: data.weight,
        tipos: data.types,
        imagen: data.sprites.front_default
    }
    return pickedData
}



// FUNCION RUTA 1 y 3  
const getPokemons = async (req, res) => {
    const { name } = req.query;
    // console.log(name);
    if (!name) {    // busca pokemones en general y devuelve las URLS
        try {
            const { data } = await axios.get(`${URL}/pokemon?limit=5`);
            const lista = data.results;
            const urls = data.results.map((poke) => {
                return poke.url
            })
            res.json(urls)
        } catch (err) {
            res.json("hubo un problema")
        }
    } else {    // Atiende a al searchbar. El name llega por query
        try {
            const { data } = await axios.get(`${URL}/pokemon/${name}`);  // DRY (ojo)
            const picking =  pickData(data)
            res.json([picking])
        } catch (err) {
            res.json("El pokemon no existe")
        }
    }
}

// FUNCION RUTA 2
const getPokemonById = async (req, res) => {
    const { idPokemon } = req.params;
    try {
        const { data } = await axios.get(`${URL}/pokemon/${idPokemon}`);
        const picking = pickData(data)
        res.json(picking)

    } catch (err) {
        res.json(err)
    }
}


// FUNCION RUTA 4
const postPokemon = async (req, res) => {

    const { nombre, vida, ataque, defensa, velocidad, altura, peso, imagen, tipo } = req.body;
    try {
        const newPokemon = await Pokemon.create({
            nombre, vida, ataque, defensa, velocidad, altura, peso, imagen
        })
        await newPokemon.addTipo(tipo)
        res.json(newPokemon)
      
    } catch (error) {
        res.send(error)
    }
}

// FUNCION RUTA 5
const getTipos = async (req, res) => {


    try {
        const tiposDb = await Tipo.findAll()
        if (tiposDb.length > 0) {
            res.json(tiposDb)
            console.log("se trajo types desde db");
        } else {
            const { data } = await axios.get(`${URL}/type`);
            data.results.forEach(t => {
                delete t.url
            })
            let tipos = data.results
            tipos = tipos.map(item => {
                return {
                    nombre: item.name
                }
            })
            const types = await Tipo.bulkCreate(tipos)
            res.json(types)
            console.log("se trajo types desde api");
        }
    } catch (err) {
        res.json(err)
    }
}


// para alterar la tabla intermedia : martina 2;40
// set -  borra y pisa.
// add  -- agrega sobre lo que tiene

// join: martina 2:52
// order: 2:04

module.exports = { getPokemons, getPokemonById, getTipos, postPokemon };



// "tipo": "water"