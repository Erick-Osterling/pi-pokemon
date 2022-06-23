import axios from "axios";
export const GET_POKES = 'GET_POKES';
export const GET_TYPES = 'GET_TYPES';
export const GET_DETALLE_POKE_POR_NOMBRE = 'GET_DETALLE_POKE_POR_NOMBRE';
export const GET_PK_BY_NAME = 'GET_PK_BY_NAME';
export const GET_PK_BY_ID = 'GET_PK_BY_ID';
export const RESET_POKES = 'RESET_POKES';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const ORDER = 'ORDER';
export const MODIFICAR_PAGINA = 'MODIFICAR_PAGINA';


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
            Array.isArray(data) ? dispatch({ type: GET_PK_BY_NAME, payload: data }): alert("Prueba con otro Pokemon (uno que exista).")
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


export function resetPokes(data) {
    return {
        type: RESET_POKES,
        payload: data
    }
}

export function modificarPagina(pedido) {
    if (pedido === 1 || pedido === -1) {
        return {
            type: MODIFICAR_PAGINA,
            payload: pedido
        }
    } else if (pedido === "inicio") {
        return {
            type: MODIFICAR_PAGINA,
            payload: "inicio"
        }
    }
    

}

export function filterByOrigin(pokes, criterio) {
    var filteredPkms;
    if (criterio === "api") {
        filteredPkms = pokes.filter((pkm) => typeof(pkm.ID) === "number")

    } else if (criterio === "db"){
        console.log("Hola desde db")
        filteredPkms = pokes.filter((pkm) => isNaN(pkm.ID))
    }
    else if (criterio === "todos")(
        filteredPkms = pokes
    )
    return {
        type: FILTER_BY_ORIGIN,
        payload: filteredPkms
    }
}

export function filterByType(pokes, type) {
    var filteredPkms;
    if (type === "todos") {
        filteredPkms = pokes
    } else {
        filteredPkms = pokes.filter((pks) => pks.tipos.includes(type) )
    }
    return {
        type: FILTER_BY_TYPE,
        payload: filteredPkms
    }
}

export function order(pokes, criterio) {
    var orderenado = pokes.slice();

    if (criterio === "sinOrd") orderenado  =  orderenado

    if (criterio === "attAsc") {
            orderenado =  orderenado.sort((a , b)=> {
            if( a.ataque*1 < b.ataque*1)  return -1; 
            if( a.ataque*1 > b.ataque*1) return 1; 
            return 0;
        })
    } 
    if (criterio === "attDes") {
        orderenado =  orderenado.sort((a , b)=> {
            if( a.ataque*1 > b.ataque*1)  return -1; 
            if( a.ataque*1 < b.ataque*1) return 1; 
            return 0;
        })
    } 
    if (criterio === "namAsc") {
        orderenado =  orderenado.sort((a , b)=> {
            if( a.nombre.toLowerCase() < b.nombre.toLowerCase())  return -1; 
            if( a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1; 
            return 0;
        })
    } 
    if (criterio === "namDes") {
        orderenado =  orderenado.sort((a , b)=> {
            if( a.nombre.toLowerCase() > b.nombre.toLowerCase())  return -1; 
            if( a.nombre.toLowerCase() < b.nombre.toLowerCase()) return 1; 
            return 0;
        })
    } 

    return {
        type: ORDER,
        payload: orderenado
    }
}

// export function orderByName(pokes, order) {
//     var orderedPkms;
//     if (type === "todos") {
//         orderedPkms = pokes
//     } else {
//         orderedPkms = pokes.filter((pks) => pks.tipos.includes(type) )
//     }
//     return {
//         type: ORDER_BY_NAME,
//         payload: orderedPkms
//     }
// }




