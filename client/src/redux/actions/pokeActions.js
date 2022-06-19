import axios from "axios";
export const GET_POKES = 'GET_POKES';
export const GET_TYPES = 'GET_TYPES';
export const GET_DETALLE_POKE_POR_NOMBRE = 'GET_DETALLE_POKE_POR_NOMBRE';


export function getPokes(name) {  //name sirve para el search.

    if (!name) {  // si no hay query, entonces busca con normalidad la lista de pokemones.
        try {
            return async (dispatch) => {
                const { data } = await axios("http://localhost:5003/pokemons")
                const pokeIds = data.map((url => url.split("/")[6]))
                Promise.all(pokeIds.map(id => axios(`http://localhost:5003/pokemons/${id}`)))
                    .then((pkms) => {
                        const listado = pkms.map((x) => x.data)
                        // console.log(listado);
                        dispatch({ type: GET_POKES, payload: listado })
                    }
                    )
            }
        } catch (error) {
            console.log("Error en solicitud de pokemones: ", error);
        }


    } else {   // este es el caso en donde vino info que debemos mandar por query al nuestro servidor.
        return async (dispatch) => {
            try {
                const { data } = await axios(`http://localhost:5003/pokemons?name=${name}`)
                dispatch({ type: GET_POKES, payload: data })
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export function getTypes() {
    try {
        return async (dispatch) => {
            const { data } = await axios('http://localhost:5003/types');
            console.log(data);
            dispatch({ type: GET_TYPES, payload: data })
        }
    } catch (error) {
        console.log("problema al conseguir los tipos", error);
    }
}