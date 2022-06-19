import React, { useEffect } from "react";
import style from './Deck.module.css';
import { getPokes, getTypes } from "../../redux/actions/pokeActions";
import { connect } from 'react-redux'
import Card from "../Card/Card.jsx";


export function Deck(props) {

  useEffect(() => {
    props.dispatchGetPokes();
    props.dispatchGetTypes();
  }, [])

  return (
    <div className={style.container}>
      {
        props.reduxPokemons.map(pkm => {
          return (
            <Card
              key={pkm.ID}
              nombre={pkm.nombre}
              imagen={pkm.imagen}
              tipos={pkm.tipos}
            />
          )
        }
        )
      }
    </div>
  )

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
