import './App.css';
import { Route, Switch } from 'react-router-dom';  //eo importar el switch en algun momento
import React from 'react';  // luego importar useEffect

import Landing from './components/Landing/Landing.jsx';
import Deck from './components/Deck/Deck.jsx';
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
        <Route path={'/detalle/:idParaDetalle'}>
          <Detalle />
        </Route>

        <Route path="/home">
          <Navbar />
          <Deck />
        </Route>

        <Route path='/create'>
          <Create />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
