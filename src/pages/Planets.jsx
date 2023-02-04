import React from 'react'
import { useParams } from 'react-router-dom';
import  useFetch  from '../hooks/useFetch';

const Planets = () => {
  const {id} = useParams();
  const {data,error,loading} = useFetch(`https://swapi.dev/api/planets`,id);
  
 
  return (
    <div>
      {
        (loading)?<p>Cargando....</p>
        :
        ( Number(id) > data.results.length ? <p>Estos no son los androides que estas buscando</p>
        :
        <div>
        <h1>{data.results[id-1].name}</h1>
        <p>Rotation period: {data.results[id-1].rotation_period} </p>
        <p>Orbital period: {data.results[id-1].orbital_period} </p>
        <p>Gravity: {data.results[id-1].gravity}</p>
      </div>)
      }
    </div>
  )
}

export default Planets