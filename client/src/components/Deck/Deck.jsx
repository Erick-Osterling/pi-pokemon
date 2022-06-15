import React, { useEffect, useState } from "react";
import style from './Deck.module.css';
import { getPokesRaw, getPokesData } from "../../redux/actions/pokeActions";
import { connect } from 'react-redux'
import Card from "../Card/Card.jsx";

export function Deck(props) {
  // const [pokemon, setPokemon] = useState()
  useEffect(() => {
    props.getPokesRaw()
  }, [])

  return (
    <div className={style.container}>
      {
        props.pokemonsUrl.map(pkm =>
          <Card
            key={pkm.ID}
            nombre={pkm.nombre}
            img={pkm.img}
            tipos={pkm.tipos}
          />)
      }
    </div>
  )

}

const mapStateToProps = (state) => ({
  pokemonsUrl: state.pokemonsUrl,
  pokemonsData: state.pokemonsData
});


function mapDispatchToProps(dispatch) {
  return {
    getPokesRaw: () => dispatch(getPokesRaw()),
    getPokesData: () => dispatch(getPokesData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);