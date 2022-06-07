import React from 'react';
import styles from './Landing.module.css';
import imagenpoke from "../../assets/images/pokemon.png";
import { Link } from 'react-router-dom';

export default function Landing(props) {
    return (
        <div>
            Esta de acá es la landing page
            <Link to='/home'> <button>HOME</button> </Link>
            <img src={imagenpoke} alt="bg image pokemon" />
        </div>
    )
}