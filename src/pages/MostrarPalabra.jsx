import React from 'react'
import { useParams } from 'react-router-dom';

const MostrarPalabra = () => {
  let {palabra}= useParams();
  return (
    <div style={{display:'flex',width:'100%',justifyContent: 'center'}}>La palabra es {palabra}</div>
  )
}

export default MostrarPalabra