import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './Crear.module.css'
import { getTypes } from "../../redux/actions/pokeActions";
import axios from "axios";
import { connect } from 'react-redux'

export function Create(props) {

    useEffect(() => {
        props.dispatchGetTypes();
    }, [])


    let placeHolderValues =
    {
        nombre: 'Ingrese nombre',
        altura: 'Ingrese altura',
        peso: "Ingrese peso",
        ataque: 'Ingrese ataque',
        vida: 'Ingrese vida',
        defensa: 'Ingrese defensa',
        velocidad: 'Ingrese velocidad',
        imagen: 'Link de imagen',
        tipo: []
    }

    let errInitVal =
    {
        nombre: 'campo requerido',
        altura: 'campo requerido',
        peso: 'campo requerido',
        ataque: 'campo requerido',
        vida: 'campo requerido',
        defensa: 'campo requerido',
        velocidad: 'campo requerido',
        imagen: 'campo requerido',
        tipo: []
    }


    const [newPokemon, setNewPokemon] = useState(placeHolderValues);
    const [errors, setErrors] = useState(errInitVal)
    const [typeParaMostrar, setTypeParaMostrar] = useState([])

    function validate(input) {
        let errors = {};

        if (!input.nombre) {
            errors.nombre = "Este campo es obligatorio"
        } else if (!/[a-zA-Z]{0,255}/.test(input.nombre)) {
            errors.nombre = "Por favor ingrese un nombre válido"
        }

        if (!input.altura) {
            errors.altura = "El pokemon tiene que tener altura."
        } else if (!/^\d+$/.test(input.altura)) {
            errors.altura = "Este campo solo acepta números."
        } else if (input.altura > 100) {
            errors.altura = "Altura excesiva."
        }

        if (!input.peso) {
            errors.peso = "El pokemon tiene que pesar algo."
        } else if (!/^\d+$/.test(input.peso)) {
            errors.peso = "Este campo solo acepta números."
        } else if (input.peso > 1000) {
            errors.peso = "Demasiado Gordo!! .. para ser registrado."
        }

        if (!input.ataque) {
            errors.ataque = "El pokemon tiene que tener algo de ataque."
        } else if (!/^\d+$/.test(input.ataque)) {
            errors.ataque = "Este campo solo acepta números."
        } else if (input.ataque > 100) {
            errors.ataque = "no existen pokemones tan fuertes."
        }

        if (!input.vida) {
            errors.vida = "El pokemon tiene que tener algo de vida."
        } else if (!/^\d+$/.test(input.vida)) {
            errors.vida = "Este campo solo acepta números."
        } else if (input.vida > 100) {
            errors.vida = "Los pokemones no tienen 9 vidas como los gatos"
        }

        if (!input.defensa) {
            errors.defensa = "El pokemon tiene que tener algo de defensa."
        } else if (!/^\d+$/.test(input.defensa)) {
            errors.defensa = "Este campo solo acepta números."
        } else if (input.defensa > 100) {
            errors.defensa = "Un pokemon no puede ser invulnerable."
        }

        if (!input.velocidad) {
            errors.velocidad = "Algo de velocidad para poder atacar es necesario"
        } else if (!/^\d+$/.test(input.velocidad)) {
            errors.velocidad = "Este campo solo acepta números."
        } else if (input.velocidad > 100) {
            errors.velocidad = "Tanta velocidad sería injunto para los demás."
        }

        if (!input.imagen) {
            errors.imagen = "Por favor ingrese un link a una imagen"
        } else if (!/(https?:\/\/.*\.(?:png|jpg))/i.test(input.imagen)) {
            errors.imagen = 'La dirección debe acabar en "png" o "jpg"'
        }

        return errors
    }

    function handleInputChange(e) {
        e.preventDefault();
        setNewPokemon({
            ...newPokemon,
            [e.target.name]: e.target.value
        });

        setErrors(validate({
            ...newPokemon,
            [e.target.name]: e.target.value
        }));
    }

    function handleNewType(event) {

        console.log(event.target.name)
        if (typeParaMostrar.length === 2) {
            alert("Los pokemones pueden tener un máximo de dos tipos")
        } else {
            setTypeParaMostrar([...typeParaMostrar, props.reduxAllTypes[event.target.selectedIndex - 1].nombre])
            setNewPokemon({
                ...newPokemon,
                [event.target.name]: [...newPokemon[event.target.name], props.reduxAllTypes[event.target.selectedIndex].ID]
            })
        }
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

    return (
        <form className={style.container} onSubmit={(e) => postPokemon(e)}>
            <div className={style.planilla}>
                <h2 className={style.titulo}>Crea tu Pokémon !! </h2>
                <div className={style.categoria}>
                    <label>Nombre:</label>
                    <div className={style.campoError}>
                        <input
                            className={style.planillainput}
                            name="nombre"
                            value={newPokemon.nombre}
                            onChange={(e) => handleInputChange(e)}
                        />
                        {errors.nombre ? (<p className={style.danger}>{errors.nombre}</p>) : null}
                    </div>
                </div>
                <div className={style.categoria}>
                    <label>Altura:</label>
                    <div className={style.campoError}>
                        <input
                            className={style.planillainput}
                            name="altura"
                            value={newPokemon.altura}
                            onChange={(e) => handleInputChange(e)}
                        />
                        {errors.altura ? (<p className={style.danger}>{errors.altura}</p>) : null}
                    </div>

                </div>
                <div className={style.categoria}>
                    <label>Peso:</label>
                    <div className={style.campoError}>
                        <input
                            className={style.planillainput}
                            name="peso"
                            value={newPokemon.peso}
                            onChange={(e) => handleInputChange(e)}
                        />
                        {errors.peso ? (<p className={style.danger}>{errors.peso}</p>) : null}
                    </div>
                </div>
                <div className={style.categoria}>
                    <label>Ataque:</label>
                    <div className={style.campoError}>
                        <input
                            className={style.planillainput}
                            name="ataque"
                            value={newPokemon.ataque}
                            onChange={(e) => handleInputChange(e)}
                        />
                        {errors.ataque && (<p className={style.danger}>{errors.ataque}</p>)}
                    </div>
                </div>
                <div className={style.categoria}>
                    <label>Vida:</label>
                    <div className={style.campoError}>
                        <input
                            className={style.planillainput}
                            name="vida"
                            value={newPokemon.vida}
                            onChange={(e) => handleInputChange(e)}
                        />
                        {errors.vida ? (<p className={style.danger}>{errors.vida}</p>) : null}
                    </div>
                </div>
                <div className={style.categoria}>
                    <label>Defensa:</label>
                    <div className={style.campoError}>
                        <input
                            className={style.planillainput}
                            name="defensa"
                            value={newPokemon.defensa}
                            onChange={(e) => handleInputChange(e)}
                        />
                        {errors.defensa && (<p className={style.danger}>{errors.defensa}</p>)}
                    </div>
                </div>
                <div className={style.categoria}>
                    <label>Velocidad:</label>
                    <div className={style.campoError}>
                        <input
                            className={style.planillainput}
                            name="velocidad"
                            value={newPokemon.velocidad}
                            onChange={(e) => handleInputChange(e)}
                        />
                        {errors.velocidad ? (<p className={style.danger}>{errors.velocidad}</p>) : null}
                    </div>

                </div>
                <div className={style.categoria}>
                    <label>Imagen:</label>
                    <div className={style.campoError}>
                        <input
                            className={style.planillainput}
                            name="imagen"
                            value={newPokemon.imagen}
                            onChange={(e) => handleInputChange(e)}
                        />
                        {errors.imagen ? (<p className={style.danger}>{errors.imagen}</p>) : null}
                    </div>
                </div>
                <div className={style.categoria}>
                    <label>Tipos</label>
                    <select className={style.select} defaultValue="-------" name="tipo" onChange={(e) => handleNewType(e)}>
                        <option disabled >-------</option>
                        {props.reduxAllTypes.map((type, index) => {
                            return (
                                <option key={index} id={type.ID} value={type.ID}  >
                                    {type.nombre}
                                </option>
                            )
                        })}
                    </select>
                    <div className={style.typeCointainer}>
                        {typeParaMostrar.length ? <div>{typeParaMostrar.map((type, index) => {
                            return (
                                <button key={index}>{type}</button>
                            )
                        })}</div>
                            : null}
                    </div>


                </div>
                <div className={style.botones} >
                    <input
                        className={style.submit}
                        type='submit'
                        disabled={
                            errors.altura || errors.ataque || errors.vida || errors.defensa || errors.velocidad ||
                                errors.imagen || errors.peso || typeParaMostrar.length === 0 ? true : false}
                        value="CREAR POKEMON"
                    />
                    <button ><Link to={"/home"}>VOLVER AL DECK</Link></button>
                </div>
            </div>
        </form>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchGetTypes: () => dispatch(getTypes())
    }
}

const mapStateToProps = (state) => ({
    reduxAllTypes: state.allTypes
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
