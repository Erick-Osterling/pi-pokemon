import React from "react";
import style from './Card.module.css';
import { Link } from "react-router-dom";


export default function Card({ ID, nombre, imagen, tipos }) {

  return (
    <Link to={`/detalle/${ID}`}>
      <div className={style.card}>
        <div>
          {nombre}
        </div>
        <img src={imagen} alt="Imagen del pokemon" />

        <div>
          <div>
            <div>TIPOS</div>
            {/* {tipos.map((t, index) => {
              return (
                <div key={index}>
                  <button>{t}</button>
                </div>
              )
            }
            )} */}
            {tipos.length > 0 ? tipos.map((t, index) => {
              return (
                <div key={index}>
                  <button>{t}</button>
                </div>
              )
            }) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};