import React from 'react';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';


export default function Landing(props) {
    return (
        <div className={style.container}>
            <img src={props.img} alt="pokemon" className={style.img} />
            <Link to='/home'> <button className={style.button}>HOME</button> </Link>
        </div>
    )
}