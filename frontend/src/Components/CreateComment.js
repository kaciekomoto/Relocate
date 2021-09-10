import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CreateComment = ({ location }) => {
    const initialState = {
        author: "",
        rating: "",
        body: "",
        // location: location.id
    }
    const [commentForm, setCommentForm] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setCommentForm((data) => {
            return {
                ...data,
                [name] : value,
            }
        })
    }

    const handleSubmit =  (e) => {
        e.preventDefault()

        const newComment = {
            author: commentForm.author,
            rating: commentForm.rating,
            body: commentForm.body,
            location_id: location.id
        }

        const headers = {'Content-Type': 'application/json',}

        const url = `http://localhost:8000/comment/`

        axios.post(url, newComment, headers)
        .then(res => console.log(res.data))
        .then((window.location = `/location/${location.id}`))
        setCommentForm(initialState)
    }

    return (
            <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="author">Name</label>
            <input 
                id="author" 
                name="author" 
                placeholder={commentForm.author} 
                onChange={handleChange}
                required
            /> 
            <br></br>
            <label htmlFor="rating">Rating</label>
            <input 
                id="rating" 
                name="rating" 
                placeholder={commentForm.body} 
                onChange={handleChange}
                required
            />
            <br></br>
            <label htmlFor="body"/>
            <input 
                id="body" 
                name="body" 
                placeholder={commentForm.body} 
                onChange={handleChange}
                required
            />
            <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default CreateComment