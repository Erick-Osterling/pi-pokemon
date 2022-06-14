import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Detalle.module.css";
import Card from "../Card/Card";


export default function Detalle({ idPokemon }) {
    const [pokeDetalle, setPokeDetalle] = useState();

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5003/pokemons/${idPokemon}`)
            setPokeDetalle(data)
        })()
    }, [idPokemon]);


    if (pokeDetalle) {
        console.log(pokeDetalle);
        return (
            <div className={style.contenedor}>
                <Card nombre={pokeDetalle.nombre} img={pokeDetalle.img} tipos={pokeDetalle.tipos} />
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
            </div>
        );
    } else {
        return (
            <div>No hay data aun</div>
        )
    }
};





