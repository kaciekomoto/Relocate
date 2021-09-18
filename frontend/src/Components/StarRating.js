import React from 'react'
import { useState, useEffect } from 'react'

const StarRating = () => {
    const [rating, setRating] = useState(null);


    return (
        <div>
            <div> 
                {[...Array(5)].map((star, i) => {
                    const ratingVal = i + 1
                    
                    return (
                        <label>
                            <input 
                                type="radio" 
                                name="rating" 
                                value={ratingVal} 
                                onClick={() => (setRating(ratingVal))} 
                            />
                            <span 
                            class="material-icons star-icon"
                            color={ratingVal <= rating ? "#ffc107" : "e4e5e9"}
                            >star</span>
                        </label>
                    )
                    })}
            </div>
        </div>
    )
}

export default StarRating

{/* <span class="material-icons star-icon">star_outline</span> */}