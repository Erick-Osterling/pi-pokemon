import React, {useState} from "react";
import style from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
    const [pokemon , setPokemon] = useState("")

  // function obtenerPokemon(evento) {
  //   setPokemon(evento.target.value)
  // }
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(pokemon);
    }}>
      <input
        type="text"
        placeholder="Pokemon..."
        value = {pokemon}
        onChange={(evento)=>setPokemon(evento.target.value)}
      />
      <input type="submit" className={style.btnSearch} value="Buscar" />
    </form>
  );
}