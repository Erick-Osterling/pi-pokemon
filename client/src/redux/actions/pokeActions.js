import axios from "axios";
export const GET_POKES_RAW = 'GET_POKES_RAW';
export const GET_DETALLE_POKE_POR_NOMBRE = 'GET_DETALLE_POKE_POR_NOMBRE';
export const GET_PRUEBA = 'GET_PRUEBA';
export const GET_POKES_DATA = 'GET_POKES_DATA';


/////////////////////////////////////////////////////////////////////////////////////////////////////////

// va a traer la lista inicial, es decir nombre y URL
// export function getPokesRaw() {
//     return async (dispatch) => {
//         fetch("http://localhost:5003/pokemons")
//             .then(r => r.json())
//             .then(urlArray => {
//                 Promise.all(urlArray.map(url => axios.get(url)))
//                     .then((response) => console.log(response))
//             })
//     }
// }

// export function getPokesRaw() {
//     return async (dispatch) => {
//         const {data} = await axios("http://localhost:5003/pokemons")
//         const pokeIds = data.map((url => url.split("/")[6]))
//         Promise.all(pokeIds.map(id=> axios(`http://localhost:5003/pokemons/${id}`)))
//         .then(pkms=> console.log(pkms))      
//     }
// }


export function getPokesRaw() {
    return async (dispatch) => {
        const { data } = await axios("http://localhost:5003/pokemons")
        const pokeIds = data.map((url => url.split("/")[6]))
        Promise.all(pokeIds.map(id => axios(`http://localhost:5003/pokemons/${id}`)))
            .then((pkms) => {
                const listado = pkms.map((x) => x.data)
                console.log(listado);
                dispatch({ type: GET_POKES_RAW, payload: listado })
            }
            )

    }
}







export function getPokesData(url) {
    return async (dispatch) => {
        fetch(url)
            .then(r => r.json())
            .then(json => {
                dispatch({ type: GET_POKES_DATA, payload: json })
            })
    }
}



export function getDetallePokePorNombre(nombre) {
    return {
        type: GET_DETALLE_POKE_POR_NOMBRE,
        payload: nombre
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

// export function getPrueba(){
//     return function (dispatch){
//         fetch("http://localhost:5003/prueba")
//         .then(r=>r.json())
//         .then(json => {
//             dispatch({type: GET_PRUEBA, payload:json});
//         })
//     }
// }

export function getPrueba() {
    return async (dispatch) => {
        const { data } = await axios("http://localhost:5003/prueba")
        dispatch({ type: GET_PRUEBA, payload: data });
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

// react-redux 20b 1:42 ejemplo de dispatch axios. 


  // export const INCREMENTAR = "INCREMENTAR";
// export const DECREMENTAR = "DECREMENTAR";

// export function incrementar(data) {
//     return {
//         type: INCREMENTAR,
//         payload: data
//     }
// }

// export function decrementar(data) {
//     return {
//         type: DECREMENTAR,
//         payload: data
//     }
// }