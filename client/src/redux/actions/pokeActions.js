import axios from "axios";

// ejemplo
export const GET_POKES_RAW = 'GET_POKES_RAW';


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

// va a traer la lista inicial, es decir nombre y URL
export async function getPokesRaw() {
    const pokeLista = await axios("http://localhost:5003/prueba");
    dispatch({ type: GET_POKES_RAW, payload: pokeLista });
}


export function getDetallePokePorNombre (nombre) {
    
    
    
    
    return{
        type: GET_DETALLE_POKE_POR_NOMBRE,
        payload: nombre 
    }
}

// react-redux 20b 1:42 ejemplo de dispatch axios. 

export function getMovieDetail(id) {
    return function (dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${APY_KEY}&i=${id}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIE_DETAIL, payload: json });
        });
    }
  }