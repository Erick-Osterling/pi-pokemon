import './App.css';
import { Route} from 'react-router-dom';  //eo importar el switch en algun momento
import React from 'react';  // luego importar useEffect

import Landing from './components/Landing/Landing.jsx';
// import Params from './components/Params/Params.jsx';
// import Deck from './components/Deck/Deck.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Prueba from './components/Prueba/Prueba.jsx';
import Detalle from './components/Detalle/Detalle.jsx'

import imagenpoke from "../src/assets/images/pokemon.png";

function App() {
  
  return (
    <div className="App">
      <Prueba num={6}/>
      <Detalle pista={5}/>
      {/* <SearchBar/> */}
      {/* <Deck pokemons={[{ID:1, nombre:"Erick", img: "4", tipos: "Listos"}]}/> */}
      
      <Route path='/landing'>
        <Landing img={imagenpoke} />
      </Route>
      <Route path="/home">
        <h1>Bienvenidos al Pokelandia!!</h1>
      </Route>
      {/* <Route path='/detalle'>
        <div>Irán los detalles acá.</div>
      </Route>
      <Route path='/crear'>
        <div>Acá vamos a crear un poquemon</div>
      </Route>
      <Route path='/params/:par1/:par2'>
        <Params />
      </Route> */}
    </div>
  );
}

export default App;
