import React, { useEffect, useState } from "react";
import style from './Deck.module.css';
import { getPokes, getTypes, modificarPagina } from "../../redux/actions/pokeActions";
import { connect } from 'react-redux'
import Card from "../Card/Card.jsx";


export function Deck(props) {
  
  let elementosPorPagina = 12;
  let cantElementos = props.reduxPokemons.length
  let numeroDePaginas = Math.ceil(cantElementos / elementosPorPagina); 
  let inicio = (props.reduxPagina * elementosPorPagina) - elementosPorPagina;
  let fin = ((props.reduxPagina * elementosPorPagina) - 1)

  if (fin >= cantElementos) {
    fin = cantElementos - 1
  }


  const onModificarPagina = (pedido) => {
  
    if (pedido === -1 && props.reduxPagina > 1) {
      props.dispatchModificarPagina(pedido)

    } else if (pedido === 1 && props.reduxPagina < numeroDePaginas) {
      props.dispatchModificarPagina(pedido)
    }
  }

  useEffect(() => {
    props.dispatchGetPokes();
    props.dispatchGetTypes();
  }, [])


  if (Array.isArray(props.reduxPokemons) && props.reduxPokemons.length > 0) {
    let pkmPorPagina = props.reduxPokemons.slice(inicio, fin + 1)
    return (
      <div className={style.baul}>

        <div className={style.paginador}>
          <span>{`${inicio + 1} - ${fin + 1} de ${cantElementos}`}</span>
          <button onClick={() => onModificarPagina(-1)}> anterior </button>
          <span>{`pagina ${props.reduxPagina} de ${numeroDePaginas}`}</span>
          <button onClick={() => onModificarPagina(1)}> siguiente </button>
        </div>

        <div className={style.container}>
          {
            pkmPorPagina.map(pkm => {
              {/* props.reduxPokemons.map(pkm => { */ }
              return (
                <Card
                  key={pkm.ID}
                  ID={pkm.ID}
                  nombre={pkm.nombre}
                  imagen={pkm.imagen}
                  tipos={pkm.tipos}
                />
              )
            }
            )
          }
        </div>

      </div>
    )
  } else {
    return (
      <div className={style.noHayPkms}>No hay pokemons de este tipo</div>
    )
  }


}

const mapStateToProps = (state) => ({
  reduxPokemons: state.pokemons,
  reduxPagina: state.pagina
});


function mapDispatchToProps(dispatch) {
  return {
    dispatchGetPokes: () => dispatch(getPokes()),
    dispatchGetTypes: () => dispatch(getTypes()),
    dispatchModificarPagina: (pedido) => dispatch(modificarPagina(pedido))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
