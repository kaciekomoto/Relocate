import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CreateComment = ({match, location, setComments }) => {
    const initialState = {
        // author: "",
        // rating: "",
        body: "",
        // location: location.id
    }
    const [commentForm, setCommentForm] = useState(initialState)

    const handleChange = (e) => {
        setCommentForm(e.target.value)
        console.log(e.target.value)
        // setCommentForm({ ...commentForm, [e.target.id]: e.target.value })
    }

    const handleSubmit =  (e) => {
        e.preventDefault()

        const newComment = {
            body: commentForm,
            location_id: location.id
            // author:
            // rating: commentForm.rating,
        }

       const headers = {
            'Content-Type': 'application/json',
            //   'X-CSRFToken':csrftoken,
        }

        const url = `http://localhost:8000/comment/`

        axios.post(url, newComment, headers)
        .then(res => 
            console.log(res.data)
            // setCommentForm(res.data)
        )
        .then(
            (window.location = `/location/${location.id}`)
            )
        // console.log(newComment)
        setCommentForm(initialState)
    }

    return (
            <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="body">Add comment</label>
                <input type="text" id="body" name="body" onChange={handleChange} value={commentForm.body} required/>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default CreateComment

//NOT WORKING FETCH
// fetch(url, {
//     method:'POST',
//     headers:{
//       'Content-type':'application/json',
//     //   'X-CSRFToken':csrftoken,
//     },
//     body:JSON.stringify(newComment)
//   })
//   .then(res => 
//         console.log(res),
//         setCommentData(initialState)
//     )
//     .catch(err => {
//         console.error(err);
//     });