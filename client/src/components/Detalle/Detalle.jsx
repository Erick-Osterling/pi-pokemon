import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Detalle.module.css";
import Card from "../Card/Card";
import { Link, useParams } from "react-router-dom";
import { getPkById } from "../../redux/actions/pokeActions";
import { connect } from 'react-redux'

export function Detalle(props) {
    const { idParaDetalle } = useParams();
    console.log(idParaDetalle)

    useEffect(() => {
        props.disGetPkById(idParaDetalle)

    }, []);

    console.log(props.reduxPokemons)
    let pokeDetalle = props.reduxPokemons
    if (!Array.isArray(pokeDetalle)) {
        return (
            <div className={style.contenedor}>
                <Card nombre={pokeDetalle.nombre} imagen={pokeDetalle.imagen} tipos={pokeDetalle.tipos} />
                <div>
                    <h2>ID: {pokeDetalle.ID}</h2>
                </div>
                <div>
                    <h3>Fisionomía</h3>
                    <h4>Peso: {pokeDetalle.peso}</h4>
                    <h4>Altura: {pokeDetalle.altura}</h4>
                </div>
                <div>
                    <h3>Atributos para la batalla</h3>
                    <h4>Ataque: {pokeDetalle.ataque}</h4>
                    <h4>Vida: {pokeDetalle.vida}</h4>
                    <h4>Defensa: {pokeDetalle.defensa}</h4>
                    <h4>Velocidad: {pokeDetalle.velocidad}</h4>
                </div>
                <button><Link to={"/home"}>VOLVER AL DECK</Link></button>
            </div>
        );
    } else {
        return (
            <div>No hay data aun</div>
        )
    }
};


const mapStateToProps = (state) => ({
    reduxPokemons: state.pokemons
});

function mapDispatchToProps(dispatch) {
    return {
        disGetPkById: (id) => dispatch(getPkById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detalle);





