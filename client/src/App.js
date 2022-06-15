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
import Create from './components/Crear/Crear';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path='/landing'>
          <Landing img={imagenpoke} />
        </Route>
        <Route path={'/detalle'}>
          <Navbar />
          <Detalle idPokemon={777} />
        </Route>

        <Route path="/home">
          <Navbar />
          <SearchBar />
          <Deck />
          {/* <Deck pokemons={[{ID:1, nombre:"Erick", img: "4", tipos: "Listos"}]}/> */}
        </Route>

        <Route path='/create'>
          <Navbar />
          <Create />
        </Route>

        <Route path='/prueba'>
          <Navbar />
          <Prueba num={6} />
        </Route>

        {/* <Route path='/params/:par1/:par2'>
          <Params />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
