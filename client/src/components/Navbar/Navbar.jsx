import React from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className={style.container}>
            <Link to='/landing' className='style.link'><div>INICIO</div></Link>
            <Link to='/home' className='style.link'><div>DECK</div></Link>
            <Link to='/detalle' className='style.link'><div>DETALLE</div></Link>
            <Link to='/create' className='style.link'><div>CREAR</div></Link>
            <Link to='/prueba' className='style.link'><div>PRUEBA</div></Link>
        </div>
    )
}