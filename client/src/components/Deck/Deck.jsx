import React from "react";
import style from './Deck.module.css';
import Card from "../Card/Card.jsx";

export default function Deck({ pokemons }) {
    
    
 
    if(pokemons){
        return (
            <div className={style.deck}>
            {pokemons.map(p => <Card
                    nombre={p.nombre}
                    img={p.img}
                    tipos={p.tipos}
                /> )}
           
            </div>
        )
    } else {
        return (
            <div className={style.deck}>Aun no hay pokemones para mostrar</div>
        )
    }


}