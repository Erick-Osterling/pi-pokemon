import React, { useState } from "react";
import style from './SearchBar.module.css';
import  {connect} from 'react-redux'
import { getPokes } from "../../redux/actions/pokeActions";

export function SearchBar(props) {
  const [pkBusqueda, setPkBusqueda] = useState("")

  return (
    
    <form onSubmit={(e) => {
      e.preventDefault();
      props.dispatchGetPokes(pkBusqueda);
    }}>

      <input
        type="text"
        placeholder="Pokemon..."
        value={pkBusqueda}
        onChange={(evento) => setPkBusqueda(evento.target.value)}
      />
      <input type="submit" className={style.btnSearch} value="Buscar" />
    </form>
  );
}

// ojo, cuando busquemos, luego para mostrar, hay que hacer un ternario en el map: "movies?.map" 21b react redux 51:50

const mapStateToProps = (state) => ({
  reduxPokemons: state.pokemons
});


function mapDispatchToProps(dispatch) {
  return {
    dispatchGetPokes: (name) => dispatch(getPokes(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);