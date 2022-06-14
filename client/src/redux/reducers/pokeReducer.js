import { GET_POKES_RAW } from '../actions/pokeActions.js';

const initialState = {
    pokemons: []
}

export default function pokeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKES_RAW:
            return {
                ...state,
                pokemons : action.payload
            }
        default:
            return state;
    }
}