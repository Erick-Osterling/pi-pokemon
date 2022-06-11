import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Prueba(props) {
    const [prueba, setPrueba] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("http://localhost:5003/prueba");
            setPrueba(data)
        }
        fetchData()
    }, [])


    return (
        <div>
            Prueba: Props: {props.num}
            <div>{prueba}</div>

        </div>
    );
};