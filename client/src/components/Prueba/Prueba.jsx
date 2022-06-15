import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPrueba } from "../../redux/actions/pokeActions";
import {connect} from 'react-redux'

export function Prueba(props) {
    // const [prueba, setPrueba] = useState();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const { data } = await axios.get("http://localhost:5003/prueba");
    //         setPrueba(data)
    //     }
    //     fetchData()
    // }, [])

    useEffect(()=>{
        console.log("Prueba se ha cargado");
        props.getPrueba()
    },[])



    return (
        <div>
             backend:{props.dataPrueba}
            <div>Hola mundo</div>
            {/* <button onClick={()=> props.getPrueba()}> GetPrueba</button> */}
        </div>
    );
};




const mapStateToProps = (state) => ({
    dataPrueba: state.dataPrueba
  });
  

  function mapDispatchToProps(dispatch) {
    return {
      getPrueba: () => dispatch(getPrueba()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Prueba);