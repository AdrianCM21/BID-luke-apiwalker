import React from 'react'
import { useParams } from 'react-router-dom';

const Mostrar = () => {
  let { id } = useParams();
  return (
    <div style={{display:'flex',width:'100%',justifyContent: 'center'}}>El numero es: {id}</div>
  )
}

export default Mostrar