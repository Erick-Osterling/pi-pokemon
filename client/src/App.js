import './App.css';
import { Route, Switch } from 'react-router-dom';  //eo importar el switch en algun momento
import React from 'react';  // luego importar useEffect

import Landing from './components/Landing/Landing.jsx';
import Params from './components/Params/Params.jsx';
import Deck from './components/Deck/Deck.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Prueba from './components/Prueba/Prueba.jsx';
import Detalle from './components/Detalle/Detalle.jsx'

import imagenpoke from "../src/assets/images/pokemon.png";
import Contador from './components/Contador/Contador.jsx';   // borrar luego. solo se importó para configurar redux

function App() {

  return (
    <div className="App">

      <Prueba num={6} />


      <Switch>
        <Route path='/landing'>
          <Landing img={imagenpoke} />
        </Route>
        <Route path={'/detalle'}>
          <Detalle idPokemon={777} />
        </Route>

        <Route path="/home">
          <h1> HOME </h1>
          <SearchBar />
          {/* <Deck pokemons={[{ID:1, nombre:"Erick", img: "4", tipos: "Listos"}]}/> */}
        </Route>
        <Route path='/detalle'>
          <div>Irán los detalles acá.</div>
        </Route>
        <Route path='/crear'>
          <div>Acá vamos a crear un poquemon</div>
        </Route>
        <Route path='/params/:par1/:par2'>
          <Params />
        </Route>
        <Route path={'/contador'}>
          <Contador />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
