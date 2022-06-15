import React, { useState } from "react";
import style from './Crear.module.css'


export default function Create(props) {

    const [newPokemon, setNewPokemon] = useState({
        altura: 'En centímetros',
        ataque: 'En HP que le quita a quien recibe el ataque',
        vida: 'En hitpoints (HP)',
        defensa: 'En puntos de ataque que bloquea',
        velocidad: 'En movimientos por turno'
    });

    const [errors, setErrors] = useState({

    })

    function validate(input) {
        let errors = {};

        if (!input.altura) {
            errors.altura = "El pokemon tiene que tener vida."
        } else if (input > 100) {
            errors.altura = "no existen pokemones tan altos. Por favor ingrese una altura verosimil."
        }

        if (!input.ataque) {
            errors.ataque = "El pokemon tiene que tener algo de ataque, si no no sirve para nada."
        } else if (input > 500) {
            errors.ataque = "no existen pokemones tan fuertes. Por favor ingrese un ataque verosimil."
        }

        if (!input.vida) {
            errors.vida = "El pokemon tiene que tener algo de vida, si no estaría muerto."
        } else if (input > 500) {
            errors.vida = "Es demasiada vida para una sola vida. Los pokemones no son como los gatos."
        }

        if (!input.defensa) {
            errors.defensa = "El pokemon tiene que tener algo de defensa."
        } else if (input > 500) {
            errors.defensa = "Es demasiada defensa. Un pokemon no puede ser invulnerable."
        }

        if (!input.velocidad) {
            errors.velocidad = "El pokemon tiene que tener algo de velocidad; si no, no podría moverse para atacar"
        } else if (input > 500) {
            errors.velocidad = "Es demasiada velocidad. Sería injuntos para los demás pokemones."
        }

        return errors
    }

    const handleInputChange = (e) => {
        e.preventDefault();

        setNewPokemon({
            ...newPokemon,
            [e.target.name]: e.target.value
        })

        setErrors(validate({
            ...newPokemon,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <form>
            <div className={style.container}>
                <div>
                    <label>Altura:</label>
                    <input
                        name="altura"
                        value={newPokemon.altura}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.altura ? (<p className={style.danger}>{errors.altura}</p>) : null}
                </div>
                <div>
                    <label>Ataque:</label>
                    <input
                        name="ataque"
                        value={newPokemon.ataque}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.ataque && (<p className={style.danger}>{errors.ataque}</p>)}
                </div>
                <div>
                    <label>Vida:</label>
                    <input
                        name="vida"
                        value={newPokemon.vida}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.vida ? (<p className={style.danger}>{errors.vida}</p>) : null}
                </div>
                <div>
                    <label>Defensa:</label>
                    <input
                        name="defensa"
                        value={newPokemon.defensa}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.defensa && (<p className={style.danger}>{errors.defensa}</p>)}
                </div>
                <div>
                    <label>Velocidad:</label>
                    <input
                        name="velocidad"
                        value={newPokemon.velocidad}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {errors.velocidad ? (<p className={style.danger}>{errors.velocidad}</p>) : null}
                </div>
                <div>
                    <input
                        type='submit'
                        disabled={errors.altura || errors.ataque || errors.vida || errors.defensa || errors.velocidad ? true : false}
                        value="Crear Pokemon"
                        className={style.submit}
                    />
                </div>
            </div>
        </form>
    )
}