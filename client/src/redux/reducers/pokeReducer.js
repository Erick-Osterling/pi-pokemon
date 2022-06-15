import { GET_POKES_RAW, GET_PRUEBA, GET_POKES_DATA } from '../actions/pokeActions.js';

const initialState = {
    pokemonsUrl: [],
    pokemonsData: [],
    dataPrueba: ""
}

export default function pokeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKES_RAW:
            return {
                ...state,
                pokemonsUrl: action.payload
            }
            case GET_POKES_DATA:
                return {
                    ...state,
                    pokemonsData: [...state.pokemonsData , action.payload ] 
                }
        case GET_PRUEBA:
            return {
                ...state,
                dataPrueba: action.payload
            }
        default:
            return state;
    }
}