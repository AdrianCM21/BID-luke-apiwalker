import React from 'react'
import { useParams } from 'react-router-dom';

const Color = () => {
  let {color1,color2}=useParams();
  const sty={
    display:'flex',
    width: '100%',
    height: '70px',
    justifyContent: 'center',
    margin:'auto',
    backgroundColor: `${color1}`,
    color:`${color2}`
  }
  return (
    <div style={sty}>Color</div>
  )
}

export default Color