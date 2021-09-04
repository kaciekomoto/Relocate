import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CreateComment = ({match}) => {
    const initialState = {
        // author: "",
        rating: "",
        body: ""
    }
    const [comment, setComment] = useState(initialState)

    const handleChange = (e) => {
        setComment(e.target.value)
        // setComment({ ...comment, [e.target.id]: e.target.value })
    }

    const handleSubmit =  (e) => {
        e.preventDefault()

        const newComment = {
            // rating: comment.rating,
            body: comment.body,
        }
    
        axios.post(`http://localhost:8000/comment/`, newComment)
        .then(res => console.log(res.data))
        console.log(newComment)
        setComment(initialState)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="body">Add comment</label>
                <input type="text" name="body" onChange={handleChange} value={comment.body} required/>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default CreateComment