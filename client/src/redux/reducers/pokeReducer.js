import { GET_POKES, GET_TYPES } from '../actions/pokeActions.js';

const initialState = {
    pokemons: [], 
    allTypes: []
}

export default function pokeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKES:

            if (typeof(action.payload) !== "string") {
                return {
                    ...state,
                    pokemons: action.payload
                }
            } else {
                alert("Prueba con otro Pokemon (uno que exista).")
            }
              break;
        case GET_TYPES:
            if(action.payload.length > 0){
                return {
                    ...state,
                    allTypes: action.payload
                }
            }
            console.log(action.payload);
            break;
        default:
            return state;
    }
}