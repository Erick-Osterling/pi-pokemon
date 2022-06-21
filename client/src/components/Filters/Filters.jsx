import React from "react";
import style from './Filters.module.css';
import { connect } from 'react-redux'


export function Filters(props) {

    return (
        <div className={style.container}>
            <form>
                <div>ORIGEN</div>
                <select defaultValue="Todos">
                    <option>Todos</option>
                    <option>Existentes</option>
                    <option>Creados</option>
                </select>
            </form>
            <form>
                <div>TIPOS</div>
                <select defaultValue="Todos">
                    <option name="todos" >Todos</option>
                    {props.reduxAllTypes.map(type => {
                        return (
                            <option key={type.ID} name={type.nombre}>{type.nombre}</option>
                        )
                    })}
                </select>
            </form>
            <form>
                <div>ORDENAMIENTO</div>
                <select defaultValue="sin orden">
                    <option >Sin orden</option>
                    <option>Ataque / Ascendente</option>
                    <option>Ataque / Descendente</option>
                    <option>Nombre / Ascendente</option>
                    <option>Nombre / Descendente</option>
                </select>
            </form>
            <button >RESET</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    reduxAllTypes: state.allTypes
});

export default connect(mapStateToProps, null)(Filters);