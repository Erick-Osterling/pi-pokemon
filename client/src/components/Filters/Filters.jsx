import React from "react";
import style from './Filters.module.css';
import { connect } from 'react-redux'
import { resetPokes, filterByOrigin, filterByType, order } from "../../redux/actions/pokeActions";



export function Filters(props) {

    function handleReset(data) {
        props.dispatchResetPokes(data)
    }

    function handleOrigen(origen) {
        console.log(origen)
        props.dispatchFilterByOrigin(props.reduxBackup, origen)
    }


    function handleType(type) {
        console.log(type)
        props.dispatchFilterByType(props.reduxBackup, type)
    }

    function handleOrder(criterio) {
        props.dispatchOrder(props.reduxBackup , criterio)
    }

    return (
        <div className={style.container}>
            <form>
                <div>ORIGEN</div>
                <select defaultValue="Todos" onChange={(e) => handleOrigen(e.target.value)}>
                    <option value="todos">Todos</option>
                    <option value="api">Existentes</option>
                    <option value="db">Creados</option>
                </select>
            </form>
            <form>
                <div>TIPOS</div>
                <select defaultValue="Todos" onChange={(e) => handleType(e.target.value)}>
                    <option value="todos" >Todos</option>
                    {props.reduxAllTypes.map(type => {
                        return (
                            <option key={type.ID} value={type.nombre}>{type.nombre}</option>
                        )
                    })}
                </select>
            </form>
            <form>
                <div>ORDENAMIENTO</div>
                <select defaultValue="sin orden" onChange={(e) => handleOrder(e.target.value)}>
                    <option value="sinOrd" >Sin orden</option>
                    <option value="attAsc">Ataque / Ascendente</option>
                    <option value="attDes">Ataque / Descendente</option>
                    <option value="namAsc">Nombre / Ascendente</option>
                    <option value="namDes">Nombre / Descendente</option>
                </select>
            </form>
            <button onClick={() => handleReset(props.reduxBackup)} >RESET</button>
        </div >
    );
};

const mapStateToProps = (state) => ({
    reduxAllTypes: state.allTypes,
    reduxBackup: state.backupPokes
});

function mapDispatchToProps(dispatch) {
    return {
        dispatchResetPokes: (data) => dispatch(resetPokes(data)),
        dispatchFilterByOrigin: (pokes, criterio) => dispatch(filterByOrigin(pokes, criterio)),
        dispatchFilterByType: (pokes, type) => dispatch(filterByType(pokes, type)),
        dispatchOrder: (pokes, criterio) => dispatch(order(pokes, criterio)),
        // dispatchOrderByName: (pokes, order) => dispatch(orderByName(pokes, order))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);