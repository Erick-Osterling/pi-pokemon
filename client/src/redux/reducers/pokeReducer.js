import { GET_POKES, GET_TYPES, GET_PK_BY_NAME, GET_PK_BY_ID } from '../actions/pokeActions.js';

const initialState = {
    pokemons: [],
    allTypes: [],
    backupPokes: []
}

export default function pokeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKES:

            if (Array.isArray(action.payload)) {
                return {
                    ...state,
                    pokemons: action.payload, 
                    backupPokes: action.payload
                }
            } else {
                alert("Ha habido un problema al cargar los pokemones.")
            }
            break;
        
            case GET_TYPES:
            if (action.payload.length > 0) {
                return {
                    ...state,
                    allTypes: action.payload
                }
            }
            console.log(action.payload);
            break;

        case GET_PK_BY_NAME:
            if (typeof (action.payload) !== "string") {
                return {
                    ...state,
                    pokemons: action.payload
                }
            } else {
                alert("Prueba con otro Pokemon (uno que exista).")
            }
            break;

        case GET_PK_BY_ID:
            if (typeof (action.payload) !== "string") {
                return {
                    ...state,
                    pokemons: action.payload
                }
            } else {
                alert("Prueba con otro Pokemon (uno que exista).")
            }
            break;

        default:
            return state;
    }
}