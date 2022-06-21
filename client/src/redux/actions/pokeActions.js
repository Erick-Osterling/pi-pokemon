import axios from "axios";
export const GET_POKES = 'GET_POKES';
export const GET_TYPES = 'GET_TYPES';
export const GET_DETALLE_POKE_POR_NOMBRE = 'GET_DETALLE_POKE_POR_NOMBRE';
export const GET_PK_BY_NAME = 'GET_PK_BY_NAME';
export const GET_PK_BY_ID = 'GET_PK_BY_ID';


export function getPokes() {
    try {
        return async (dispatch) => {
            const { data } = await axios("http://localhost:5003/pokemons")
            dispatch({ type: GET_POKES, payload: data })
        }
    } catch (error) {
        console.log("Error en solicitud de pokemones: ", error);
    }
}


export function getPkByName(name) {
    return async (dispatch) => {
        try {
            const { data } = await axios(`http://localhost:5003/pokemons?name=${name}`)
            dispatch({ type: GET_PK_BY_NAME, payload: data })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getPkById(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios(`http://localhost:5003/pokemons/${id}`)
            dispatch({ type: GET_PK_BY_ID, payload: data })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getTypes() {
    try {
        return async (dispatch) => {
            const { data } = await axios('http://localhost:5003/types');
            // console.log(data);
            dispatch({ type: GET_TYPES, payload: data })
        }
    } catch (error) {
        console.log("problema al conseguir los tipos", error);
    }
}




export function handleReset() {
    
}




