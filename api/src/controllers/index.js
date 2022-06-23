const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2';
const { Pokemon, Tipo } = require('../db.js');  // importé los modelos para poder alterarlos


// escoje la información que se necesita de los pokemons que vienen de la API
const pickData = (data) => {
    console.log(data)
    let pickedData = {
        ID: data.id,
        nombre: data.name,
        vida: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        velocidad: data.stats[5].base_stat,
        altura: data.height,
        peso: data.weight,
        tipos: data.types.map((tipo) => tipo.type.name), // es necesario para que llegue igual que desde DB
        imagen: data.sprites.other["official-artwork"].front_default
    }
    return pickedData
}

const pickDbData = (data) => {   //formatea data proveniente de DB
    let pickedDbData = {
        ID: data.ID,
        nombre: data.nombre,
        vida: data.vida,
        ataque: data.ataque,
        defensa: data.defensa,
        velocidad: data.velocidad,
        altura: data.altura,
        peso: data.peso,
        tipos: data.Tipos.map((tipo) => tipo.dataValues.nombre),
        imagen: data.imagen
    }
    return pickedDbData
}


// FUNCION RUTA 1 y 3  
const getPokemons = async (req, res) => {
    const { name } = req.query;

    if (!name) {
        try {
            const { data } = await axios.get(`${URL}/pokemon?limit=40`);
            let urls = data.results.map(x => x.url)

            const arrAxiosPokes = await Promise.all(urls.map(x => axios(x)));
            const dataPkms = arrAxiosPokes.map(x => x.data)
            const PkmDataApi = dataPkms.map((pk) => pickData(pk))

            const pksDb = await Pokemon.findAll({
                include: Tipo
            });
            const pksDbDatavalues = pksDb.map((x) => x.dataValues)
            const formatPksDb = pksDbDatavalues.map((pkDb) => pickDbData(pkDb))

            // console.log(formatPksDb)

            let pksMixtos = [...PkmDataApi, ...formatPksDb]

            res.json(pksMixtos)


        } catch (err) {
            res.json("hubo un problema")
        }
    } else {    // Atiende a al searchbar. El name llega por query
        try {
            const { data } = await axios.get(`${URL}/pokemon/${name}`);  // DRY (ojo)
            const picking = pickData(data)
            res.json([picking])
        } catch (err) {
            res.json("El pokemon no existe")
        }
    }
}


// FUNCION RUTA 2  (chequear por qué en caso de ser pokemon creado, hay que envolver y desenvolver en array)
const getPokemonById = async (req, res) => {
    const { idPokemon } = req.params;

    if (idPokemon.length < 4 ) {
        try {
            const { data } = await axios.get(`${URL}/pokemon/${idPokemon}`);
            const picking = pickData(data)
            res.json(picking)
        } catch (err) {
            res.json(err)
        }
    } else {
        try {
            const pksDb = await Pokemon.findByPk(idPokemon, {
                include: Tipo
            });
            
            let pkmDbDatavalues = pksDb.dataValues;
            pkmDbDatavalues = [pkmDbDatavalues]  // envolver en array para poder pasar por pickDbData
            console.log(pkmDbDatavalues);
            const formatPkDb = pkmDbDatavalues.map((pkDb) => pickDbData(pkDb))
            console.log(formatPkDb)
            res.json(formatPkDb[0])
        } catch (err) {
            res.json(err)
        }
    }

}


// FUNCION RUTA 4
const postPokemon = async (req, res) => {
    console.log(req)
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

module.exports = { getPokemons, getPokemonById, getTipos, postPokemon };

