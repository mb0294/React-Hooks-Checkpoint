import React from 'react'
import MovieCard from './MovieCard'

const MovieListe = ({data}) => {

  return (
    <div className='cardss'>
      {data.map((el)=><MovieCard el={el} key={el._id}/>)}

    </div>
  )
}

export default MovieListe