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

    // function showCommentForm() {
    //     // e.prevent.Default();
    //     const createComment = document.querySelectorAll(".create-form");
    //     if (createComment.style.display === "none") {
    //         createComment.style.display = "block";
    //     } else {
    //         createComment.style.display = "none";
    //     }
    // }

    return (
        <div>
        <form onSubmit={handleSubmit} className="create-form">
            <button className="icon-btn close-btn">
                <span class="material-icons">close</span>
            </button>
            <h3 className="bold-subtitle">Add a Comment</h3>
            <div className="input-label-containers">
                <label htmlFor="author">Name:</label>
                <input 
                    id="author" 
                    name="author"
                    className="name-input" 
                    placeholder={commentForm.author} 
                    onChange={handleChange}
                    required
                /> 
            </div>
  
            <div className="input-label-containers">
                <label htmlFor="rating">Rating:</label>
                <input 
                    id="rating" 
                    name="rating" 
                    className="rating-input" 
                    onChange={handleChange}
                    required
                />/5
            </div>

            <div className="input-label-containers">
                <label htmlFor="body"/>
                <textarea 
                    rows="20" 
                    cols="40"
                    id="body" 
                    name="body" 
                    className="body-input" 
                    placeholder="Type you review here"
                    onChange={handleChange}
                    required
                    />
            </div>
            <button type="submit" className="purple-btn post-btn">Post</button>
        </form>
        </div>
    )
}

export default CreateComment