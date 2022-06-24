import React from "react";
import '../stylesheet/Testimonio.css';

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img 
           className='imagen-testimonio'
           src={require(`../imagenes/${props.imagen}.jpg`)}
           alt={props.alias} />
      <div className='contenedor-texto'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          <strong>{props.cargo}</strong> en {props.empresa}
          </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );    
}

export default Testimonio;