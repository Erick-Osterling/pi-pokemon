import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Detalle.module.css";


export default function Detalle(props) {
    const [pokeDetalle, setPokeDetalle] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`http://localhost:3003/pokemon/${props.pista}`)
            setPokeDetalle(data)
        }
        fetchData()
    }, []);


    return (
        <div className={style.contenedor}>
            <h1>Detalle de tu Pokemon</h1>
            <div>
                <span>{pokeDetalle.ID}</span>
                <span>{pokeDetalle.nombre}</span>
            </div>
            <div>
                <img alt={`img de ${pokeDetalle.nombre}`} />
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
                <h4>Tipos: {pokeDetalle.tipos}</h4>
            </div>
        </div>
    );

};


