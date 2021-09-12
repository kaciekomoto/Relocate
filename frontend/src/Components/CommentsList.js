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
        <div className="create-ctrls">
            <h3 className="bold-subtitle">Comments</h3>
            <button className="purple-btn add-btn">Add a Comment</button>
        </div> 
            <CreateComment  key={location.id} location={location} />
        <div className="comment-list-container">
            {comments.map(comment => {
                if (location.id == comment.location_id) {
                    return (
                        <div className="comment-container">
                            <div className="comment-main">
                                <h4 className="author">{comment.author}</h4>
                                <p>{comment.rating}/5</p>
                                <p>{comment.body}</p>
                            </div>
                            <div className="edit-del-btns">
                                <Link to={`/comment/${comment.id}`}>
                                    <span class="material-icons icon-btn edit-btn">edit</span>
                                </Link>
                                <button onClick={() => deleteComment(comment.id)} className="icon-btn delete-btn">
                                    <span className="material-icons">delete</span>
                                </button>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
        </div>
    )
}

export default CommentsList