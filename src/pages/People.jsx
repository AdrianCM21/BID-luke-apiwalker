import React from 'react'
import { useParams } from 'react-router-dom'
import  useFetch  from '../hooks/useFetch';

const People = () => {
  const {id} = useParams();
  const {data,error,loading} = useFetch(`https://swapi.dev/api/people`,id);
  console.log(data);
 
  return (
    <div>
      {
        (loading)?<p>Cargando....</p>
        :
        ( Number(id) > data.results.length ? <p>Estos no son los androides que estas buscando</p>
        :
        <div>
        <h1>{data.results[id-1].name}</h1>
        <p> Height: {data.results[id-1].height}</p>
        <p>Eair color: {data.results[id-1].hair_color}</p>
        <p>Eye color: {data.results[id-1].eye_color}</p>
      </div>)
      }
      {error && <p>{error}</p>}
    </div>
  )
}

export default People