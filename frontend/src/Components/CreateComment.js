import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CreateComment = ({ location }) => {
    const initialState = {
        author: "",
        rating: "",
        body: "",
    }
    const [commentForm, setCommentForm] = useState(initialState)
    const [show, setShow] = useState(false)

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

        const url = `https://relocate-be.herokuapp.com/comment/`

        axios.post(url, newComment, headers)
        .then(res => console.log(res.data))
        setCommentForm(initialState)
        .then((window.location = `/location/${location.id}`))
    }


    return (
        <div className="create-edit-container">
        <div className="create-ctrls">
            <h3 className="bold-sub all-caps-sub">Comments</h3>
            <button className="purple-btn add-btn" onClick={()=>setShow(true)}>Add Comment</button>
        </div> 
        { show ? 
        <form onSubmit={handleSubmit} className="create-edit-form">
            <div className="form-header">
                <h3 className="bold-sub-small">Add a Comment</h3>
                <button className="icon-btn close-btn">
                    <span class="material-icons" onClick={()=>setShow(false)}>close</span>
                </button>
            </div>
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
        : null
        }
        </div>
    )
}

export default CreateComment