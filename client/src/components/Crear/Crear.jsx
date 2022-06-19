import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './Crear.module.css'
import axios from "axios";
import { connect } from 'react-redux'


export function Create(props) {

    let placeHolderValues =
    {
        nombre: 'Los nombres válidos solo son letras',
        altura: 'En centímetros',
        peso: 'en Kg',
        ataque: 'En HP que le quita a quien recibe el ataque',
        vida: 'En hitpoints (HP)',
        defensa: 'En puntos de ataque que bloquea',
        velocidad: 'En movimientos por turno',
        imagen: 'Link de imagen', 
        tipo: []
    }

    let defValues2 =
    {
        nombre: 'Nombre polemon',
        altura: 11,
        peso: 1000,
        ataque: 12,
        vida: 13,
        defensa: 14,
        velocidad: 15,
        imagen: "https://cdn.custom-cursor.com/collections/129/cover-pokemon-preview.png", 
        tipo:[]
    }


    const [newPokemon, setNewPokemon] = useState(defValues2);
    const [errors, setErrors] = useState({})
    const [typeParaMostrar, setTypeParaMostrar] = useState([])


    useEffect(() => {
        console.log()
      }, [])

    function validate(input) {
        let errors = {};

        if (!/[a-zA-Z]{0,255}/.test(input.nombre)) {
            errors.nombre = "Por favor ingrese un nombre válido"
        }

        if (!input.altura) {
            errors.altura = "El pokemon tiene que tener vida."
        } else if (input > 100) {
            errors.altura = "no existen pokemones tan altos. Por favor ingrese una altura verosimil."
        }

        if (!input.peso) {
            errors.peso = "El pokemon tiene que pesar algo."
        } else if (input > 2000) {
            errors.altura = "Este peso exece el máximo permitido."
        }

        if (!input.ataque) {
            errors.ataque = "El pokemon tiene que tener algo de ataque, si no no sirve para nada."
        } else if (input > 500) {
            errors.ataque = "no existen pokemones tan fuertes. Por favor ingrese un ataque verosimil."
        }

        if (!input.vida) {
            errors.vida = "El pokemon tiene que tener algo de vida, si no estaría muerto."
        } else if (input > 500) {
            errors.vida = "Es demasiada vida para una sola vida. Los pokemones no son como los gatos."
        }

        if (!input.defensa) {
            errors.defensa = "El pokemon tiene que tener algo de defensa."
        } else if (input > 500) {
            errors.defensa = "Es demasiada defensa. Un pokemon no puede ser invulnerable."
        }

        if (!input.velocidad) {
            errors.velocidad = "El pokemon tiene que tener algo de velocidad; si no, no podría moverse para atacar"
        } else if (input > 500) {
            errors.velocidad = "Es demasiada velocidad. Sería injuntos para los demás pokemones."
        }

        if (!input.imagen) {
            errors.imagen = "Por favor ingrese la URL de una imagen del pokemon"
        } else if (!/(https?:\/\/.*\.(?:png|jpg))/i.test(input.imagen)) {
            errors.imagen = "Por favor ingrese el URL de una imagen"
        }

        return errors
    }

    const handleInputChange = (e) => {
        e.preventDefault();

        setNewPokemon({
            ...newPokemon,
            [e.target.name]: e.target.value
        })

        setErrors(validate({
            ...newPokemon,
            [e.target.name]: e.target.value
        }))
    }

    function postPokemon(e) {
        e.preventDefault();
        axios({
            method: 'POST',
            url: 'http://localhost:5003/pokemons',
            data: newPokemon
        }).then(alert("Pokemon añadido con éxito"))
        setNewPokemon(placeHolderValues)
    }


    function handleNewType (event) {

        console.log(event.target.name)
        if (typeParaMostrar.length === 2) {
            alert("Los pokemones pueden tener un máximo de dos tipos")
        } else {
            setTypeParaMostrar([...typeParaMostrar, props.reduxAllTypes[event.target.selectedIndex].nombre])
            console.log(props.reduxAllTypes[event.target.selectedIndex].ID)
            setNewPokemon({
                ...newPokemon,
                [event.target.name]: [...newPokemon[event.target.name], props.reduxAllTypes[event.target.selectedIndex].ID ]
            })
        }
    }

    return (
        <form onSubmit={(e) => postPokemon(e)}>
            <div className={style.container}>
                <div>
                    <label>Nombre:</label>
                    <input
                        name="nombre"
                        value={newPokemon.nombre}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.nombre ? (<p className={style.danger}>{errors.nombre}</p>) : null}
                </div>
                <div>
                    <label>Altura:</label>
                    <input
                        name="altura"
                        value={newPokemon.altura}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.altura ? (<p className={style.danger}>{errors.altura}</p>) : null}
                </div>
                <div>
                    <label>Peso:</label>
                    <input
                        name="peso"
                        value={newPokemon.peso}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.peso ? (<p className={style.danger}>{errors.peso}</p>) : null}
                </div>
                <div>
                    <label>Ataque:</label>
                    <input
                        name="ataque"
                        value={newPokemon.ataque}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.ataque && (<p className={style.danger}>{errors.ataque}</p>)}
                </div>
                <div>
                    <label>Vida:</label>
                    <input
                        name="vida"
                        value={newPokemon.vida}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.vida ? (<p className={style.danger}>{errors.vida}</p>) : null}
                </div>
                <div>
                    <label>Defensa:</label>
                    <input
                        name="defensa"
                        value={newPokemon.defensa}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.defensa && (<p className={style.danger}>{errors.defensa}</p>)}
                </div>
                <div>
                    <label>Velocidad:</label>
                    <input
                        name="velocidad"
                        value={newPokemon.velocidad}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.velocidad ? (<p className={style.danger}>{errors.velocidad}</p>) : null}
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                        name="imagen"
                        value={newPokemon.imagen}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.imagen ? (<p className={style.danger}>{errors.imagen}</p>) : null}
                </div>
                <div>
                    <label htmlFor="types">Tipos</label>
    
                    <select name="tipo" onChange={(e)=> handleNewType(e)}>
                        {props.reduxAllTypes.map(type => {
                            return (
                                    <option id={type.ID} value={type.ID}  >
                                    {type.nombre}
                                    </option>    
                            )
                        })}
                    </select>
                    {typeParaMostrar.length ? <div>{typeParaMostrar.map((type) => {
                        return(
                            <div className={style.typeDiv}>{type}</div>
                        )
                    })}</div> 
                    : null }
        

                </div>
                <div>
                    <input
                        type='submit'
                        disabled={errors.altura || errors.ataque || errors.vida || errors.defensa || errors.velocidad || errors.imagen || errors.peso ? true : false}
                        value="Crear Pokemon"
                        className={style.submit}
                    />
                    <button><Link to={"/home"}>VOLVER AL DECK</Link></button>
                </div>
            </div>
        </form>
    )
}


const mapStateToProps = (state) => ({
    reduxAllTypes: state.allTypes
});

export default connect(mapStateToProps, null)(Create);
