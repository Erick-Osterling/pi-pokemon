import React from "react";
import {useParams, useHistory, useLocation} from 'react-router-dom';

export default function Params(props) {
    let {par1, par2} = useParams();  //los nombres de estar variables están definidas en la route en app.js
    return (
        <div>
            <h1>First Parameter: {par1}</h1>
            <h1>Second Parameter: {par2}</h1>
        </div>
    );
}