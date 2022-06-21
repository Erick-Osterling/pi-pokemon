import React, { useEffect, useState } from "react";
import style from './Deck.module.css';
import { getPokes, getTypes } from "../../redux/actions/pokeActions";
import { connect } from 'react-redux'
import Card from "../Card/Card.jsx";


export function Deck(props) {

  const [pagina, setPagina] = useState(1)
  const [pkPorPagina, setPkPorPagina] = useState()

  let elementosPorPagina = 12;
  var cantElementos = props.reduxPokemons.length

  let numeroDePaginas = Math.ceil(cantElementos / elementosPorPagina);
  let paginaActual = pagina; // esto debe varia con los clicks de los botones 
  let inicio = (paginaActual * elementosPorPagina) - elementosPorPagina;
  let fin = ((paginaActual * elementosPorPagina) - 1)

  if (fin >= cantElementos) {
    fin = cantElementos - 1
  }

  const onModificarPagina = (x) => {

    if (x === -1 && pagina > 1) {
      setPagina(pagina + x)
    } else if (x === 1 && pagina < numeroDePaginas) {
      setPagina(pagina + x)
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
          <span>{`pagina ${pagina} de ${numeroDePaginas}`}</span>
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
      <div>No hay pokemons con estas características</div>
    )
  }


}

const mapStateToProps = (state) => ({
  reduxPokemons: state.pokemons
});


function mapDispatchToProps(dispatch) {
  return {
    dispatchGetPokes: () => dispatch(getPokes()),
    dispatchGetTypes: () => dispatch(getTypes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
