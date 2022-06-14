import {createStore, applyMiddleware} from "redux";
import reducer from '../reducers/pokeReducer.js'
import thunkMiddleware  from "redux-thunk";  // para que redex pueda tener actions async para hacer peticiones a APIS.
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store;
