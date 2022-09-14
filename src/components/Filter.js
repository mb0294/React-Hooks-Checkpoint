import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';

const Filter = ({filterName,filterRating}) => {
    const [rating, setRating] = useState(0)
  const  changeRating =( newRating, name )=> {
    
   setRating(newRating)
   filterRating(newRating)
  }

    
  return (
    <div>
        <input placeholder='search by name' onChange={(e) =>filterName (e.target.value)}/><input></input><button>search</button>
        <p>
        <StarRatings
        starHoverColor="yellow"
          rating={rating}
          starRatedColor="yellow"
          changeRating={changeRating}
          numberOfStars={5}
          name='rating'
        /></p>
        
    </div>
  )
}

export default Filter