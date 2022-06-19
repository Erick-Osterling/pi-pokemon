import React from "react";
import style from './Card.module.css';
import Tipo from "../Tipos/Tipo.jsx";
import { Link } from "react-router-dom";


export default function Card({ nombre, imagen, tipos }) {

  return (
    <Link to={`/detalle/${nombre}`}>
    <div className={style.card}>
      <div>
        {nombre}
      </div>
      <img src={imagen} alt="Imagen del pokemon" />
      <div>
      
        <div>
        <div>TIPOS</div>
          {tipos.map((t, index) => <Tipo
            key={index}
            text={t.type.name}
          />)}
        </div>

      </div>
    </div>
    </Link>
  );
};