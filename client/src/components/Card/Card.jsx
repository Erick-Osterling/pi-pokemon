import React from "react";
import style from './Card.module.css';
import Tipo from "../Tipos/Tipo.jsx";


export default function Card({ nombre, img, tipos }) {

  return (
    <div className={style.card}>
      <div>
        {nombre}
      </div>
      <img src={img} alt="Imagen del pokemon" />
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
  );
};