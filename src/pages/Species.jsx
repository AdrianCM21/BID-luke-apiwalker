import React from 'react'
import { useParams } from 'react-router-dom';
import  useFetch  from '../hooks/useFetch';

const Species = () => {
  const {id} = useParams();
  const {data,error,loading} = useFetch(`https://swapi.dev/api/species`,id);
 
  return (
    <div>
      {
        (loading)?<p>Cargando....</p>
        :
        ( Number(id) > data.results.length ? <p>Estos no son los androides que estas buscando</p>
        :
        <div>
        <h1>{data.results[id-1].name}</h1>
        <p> Classification: {data.results[id-1].classification} </p>
        <p>Designation: {data.results[id-1].designation} </p>
        <p>Average height: {data.results[id-1].average_height}</p>
      </div>)
      }
      {error && <p>{error}</p>}
    </div>
  )
}

export default Species