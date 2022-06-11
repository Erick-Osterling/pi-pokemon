// import React, { useEffect, useState } from "react";
// import style from './Deck.module.css';
// import Card from "../Card/Card.jsx";
// import axios from "axios";

// export default function Deck({ pokemons }) {
//     const [pokemon, setPokemon] = useState()


//     useEffect(() => {
//         async function fetchData () {
//             const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/2")
//             setPokemon(data.name)
//         } 
//         fetchData()   
//     },[])


//     if (pokemons) {
//         return (
//             <div id={pokemones.ID} className={style.deck}>
//                 {pokemons.map(p => <Card
//                     nombre={p.nombre}
//                     img={p.img}
//                     tipos={p.tipos}
//                 />)}

//             </div>
//         )
//     } else {
//         return (
//             <div className={style.deck}>Aun no hay pokemones para mostrar</div>
//         )
//     }
// }