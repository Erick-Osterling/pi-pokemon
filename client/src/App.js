import './App.css';
import { Route, Switch } from 'react-router-dom';  //eo

import Landing from './components/Landing/Landing.jsx';
import Params from './components/Params/Params.jsx';

function App() {
  return (
    <div className="App">
      <Route path='/inicio'>
        <Landing/>
      </Route>
      <Route path="/home">
        <h1>Bienvenidos al Pokelandia!!</h1>
      </Route>
      <Route path='/detalle'>
        <div>Irán los detalles acá.</div>
      </Route>
      <Route path='/crear'>
        <div>Acá vamos a crear un poquemon</div>
      </Route>
      <Route path='/params/:par1/:par2'>
        <Params/>
      </Route>
    </div>
  );
}

export default App;
