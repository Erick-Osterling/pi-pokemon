import React from "react";
import style from './Filters.module.css';
import { connect } from 'react-redux'
import { resetPokes, filterByOrigin, filterByType, order, modificarPagina } from "../../redux/actions/pokeActions";



export function Filters(props) {

    let formOrigen = document.getElementById("formOrigen");
    let formTipos = document.getElementById("formTipos");
    let formOrden = document.getElementById("formOrden");
    

    function handleReset(data) {
        formOrigen.reset();
        formTipos.reset();
        formOrden.reset();
        props.dispatchModificarPagina("inicio")
        props.dispatchResetPokes(data)
    }

    function handleOrigen(origen) {
        formTipos.reset();
        formOrden.reset();
        props.dispatchModificarPagina("inicio")
        props.dispatchFilterByOrigin(props.reduxBackup, origen)
    }


    function handleType(type) {
        formOrigen.reset();
        formOrden.reset();
        props.dispatchModificarPagina("inicio")
        props.dispatchFilterByType(props.reduxBackup, type)
    }

    function handleOrder(criterio) {
        formOrigen.reset();
        formTipos.reset();
        props.dispatchModificarPagina("inicio")
        props.dispatchOrder(props.reduxBackup , criterio)
    }

    return (
        <div className={style.container}>
            <form id="formOrigen">
                <div>ORIGEN</div>
                <select onChange={(e) => handleOrigen(e.target.value)}>
                    <option value="todos">Todos</option>
                    <option value="api">Existentes</option>
                    <option value="db">Creados</option>
                </select>
            </form>
            <form id="formTipos">
                <div>TIPOS</div>
                <select  onChange={(e) => handleType(e.target.value)}>
                    <option value="todos" >Todos</option>
                    {props.reduxAllTypes.map(type => {
                        return (
                            <option key={type.ID} value={type.nombre}>{type.nombre}</option>
                        )
                    })}
                </select>
            </form>
            <form id="formOrden">
                <div>ORDEN</div>
                <select onChange={(e) => handleOrder(e.target.value)}>
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
        dispatchModificarPagina: (pedido) => dispatch(modificarPagina(pedido))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);