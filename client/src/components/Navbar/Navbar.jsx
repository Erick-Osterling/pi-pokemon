import React from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';


export default function Navbar() {
    return (
        <div className={style.container}>
            <div>
                <Link to='/landing' className='style.link'><div>INICIO</div></Link>
                <Link to='/create' className='style.link'><div>CREAR</div></Link>
            </div>
            <div>
                <Filters />
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
    )
}