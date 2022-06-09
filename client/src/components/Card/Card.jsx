import React from "react";
import style from './Card.module.css';


export default function Card ({nombre, img, tipos}) {

    return (
      <div className={style.card}>
        <div className="nombre">
            {nombre}
        </div>
        <img src={img} alt="Imagen del pokemon"/>
        <div>{tipos}</div>
      </div>
    );
};