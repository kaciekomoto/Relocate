import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import CreateComment from './CreateComment'
import EditComment from './EditComment'
import axios from 'axios'

const CommentsList = ({ location }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`/comment/`)
        .then(res => setComments(res.data));
    }, []) 

    return (
        <div>
        <div classname="comment-container">
            {comments.map(comment => {
                if (location.id == comment.location_id) {
                    return (
                        <div>
                            <h4>{comment.author}</h4>
                            <p>{comment.rating}/5</p>
                            <p>{comment.body}</p>
                            <Link to={`/comment/${comment.id}`}>Edit</Link>
                        </div>
                    )
                }
                    // if username == user logged in
                    // edit btn goes here
                    // delete btn goes here
            })}
        </div>
        <CreateComment key={location.id} location={location} setComments={setComments}/>
        </div>
    )
}

export default CommentsList


//USED FETCH
// fetch(`/comment/`, {
//     'method':'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         //auth goes here later
//     }
// })
// .then((res) => res.json())
// .then(res => setComments(res))
// .catch(err => console.log(err))