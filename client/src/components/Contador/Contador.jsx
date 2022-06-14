import { connect } from 'react-redux';
import { incrementar, decrementar } from '../../redux/actions/pokeActions.js'

function Contador(props) {
    console.log(props);
    return (
        <>
            <h1>Componente Contador</h1>
            <label>El contador va en: {props.contador}</label>
            <br />
            <button onClick={() => props.incrementar(10)}> + </button>
            <button onClick={() => props.decrementar(10)}> - </button>
        </>
    )
}

function mapStateToProps(state) {
    return {
        contador: state.contador,   // podŕia elegir qué enviar a props. pollito se enviará a props como propiedad.
        nombre: state.nombre
    }
}

function mapDispathToProps(dispatch) {
    return {
        incrementar: (value) => dispatch(incrementar(value)), 
        decrementar: (value) => dispatch(decrementar(value))
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Contador)    // va junto al código comentado arriba
// export default connect(mapStateToProps, {incrementar, decrementar})(Contador)  // se evita mapDispathToProps