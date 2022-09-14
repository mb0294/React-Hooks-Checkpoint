import React, { useState } from 'react'
import Add from './components/Add'
import MovieListe from './components/MovieList'
import data from './data'
import Filter from './components/Filter'
const App = () => { 
  const [searchrtg, setSearchrtg] = useState(0)
  const [searchtt, setSearchtt] = useState("")
  const filterName=(searchtt)=>{
    setSearchtt(searchtt)

  }
  const filterRating=(searchrtg)=>{
  
    setSearchrtg(searchrtg)
    
  }
  const [movies, setMovies] = useState(data)
  const handelAdd =(filmjdid)=>{setMovies([...movies,{... filmjdid,_id:movies.length}])}
 


  return (
  
    <div>
      <Filter filterName={filterName} filterRating={filterRating} />
      <Add handelAdd={handelAdd}/>
      <MovieListe data={movies.filter((el)=>el.Title.toLowerCase().includes(searchtt.trim().toLowerCase())&&(el.Rating==searchrtg))}/>
    
    
    </div>
  )
}

export default App