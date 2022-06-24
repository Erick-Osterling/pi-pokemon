import React, { useState } from "react";
import style from './SearchBar.module.css';
import { connect } from 'react-redux'
import { filterByName, modificarPagina } from "../../redux/actions/pokeActions";

export function SearchBar(props) {
  const [pkBusqueda, setPkBusqueda] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    if (pkBusqueda) {
      props.dispatchModificarPagina("inicio");
      props.disFilterByName(props.reduxBackup, pkBusqueda);
      setPkBusqueda("")
    } else alert("Por favor ingrese algún nombre de Pokemon")
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} >
      <input className={style.input} type="text" placeholder="Pokemon..."
        value={pkBusqueda} onChange={(evento) => setPkBusqueda(evento.target.value)}
      />

      <input type="submit" className={style.btnSearch} value="Buscar" />
    </form>
  );
}

const mapStateToProps = (state) => ({
  reduxBackup: state.backupPokes
});

function mapDispatchToProps(dispatch) {
  return {
    disFilterByName: (pokes, name) => dispatch(filterByName(pokes, name)),
    dispatchModificarPagina: (pedido) => dispatch(modificarPagina(pedido))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);