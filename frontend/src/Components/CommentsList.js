import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import CreateComment from './CreateComment'
import EditComment from './EditComment'
import axios from 'axios'

const CommentsList = ({ location }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchComments()
    }, []) 

    const fetchComments = () => {
        axios.get(`http://localhost:8000/comment/`)
        .then(res => 
            setComments(res.data),
            // console.log(res.data)    
        );
    }

    function deleteComment(id) {
        axios.delete(`http://localhost:8000/comment/${id}`)
        .then(res => {
            console.log(res)
            setComments(comments.filter(comment => comment.id !== id))
        })
        console.log(`deleted post with id of ${id}`)
    }

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
                            <button onClick={() => deleteComment(comment.id)} id="delete-btn">Delete</button>
                            <Link to={`/comment/${comment.id}`}>Edit</Link>
                        </div>
                    )
                }
            })}
        </div>
        <CreateComment key={location.id} location={location} setComments={setComments}/>
        </div>
    )
}

export default CommentsList