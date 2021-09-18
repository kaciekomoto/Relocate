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
        axios.get(`https://relocate-be.herokuapp.com/comment/`)
        .then(res => 
            setComments(res.data),
            // console.log(res.data)
        );
    }

    function deleteComment(id) {
        axios.delete(`https://relocate-be.herokuapp.com/comment/${id}`)
        .then(res => {
            console.log(res)
            setComments(comments.filter(comment => comment.id !== id))
        })
        console.log(`deleted post with id of ${id}`)
    }


    return (
        <div>
        <CreateComment  key={location.id} location={location} />
        <div className="comment-list-container">
        {
            comments.map(comment => {
            if (location.id == comment.location_id) {  
                return (
                    <div className="comment-container">
                        <div className="comment-main">
        
                            <h4 className="author">{comment.author}</h4>

                            <div className="rating-container">

                                {comment.rating == 5 &&
                                <div className="stars-container">
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons star-icon">star</span>
                                </div>
                                } 
                                {comment.rating == 4 &&
                                <div className="stars-container">
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons gray-star-icon">star</span>
                                </div>
                                } 
                                {comment.rating == 3 &&
                                <div className="stars-container">
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons gray-star-icon">star</span>
                                    <span class="material-icons gray-star-icon">star</span>
                                </div>
                                } 
                                {comment.rating == 2 &&
                                <div className="stars-container">
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons gray-star-icon">star</span>
                                    <span class="material-icons gray-star-icon">star</span>
                                    <span class="material-icons gray-star-icon">star</span>
                                </div>
                                } 
                                {comment.rating == 1 &&
                                <div className="stars-container">
                                    <span class="material-icons star-icon">star</span>
                                    <span class="material-icons gray-star-icon">star</span>
                                    <span class="material-icons gray-star-icon">star</span>
                                    <span class="material-icons gray-star-icon">star</span>
                                    <span class="material-icons gray-star-icon">star</span>
                                </div>
                                } 
                                <p className="rating-txt"> {comment.rating}/5</p>
                            </div>
                        <p className="comment-body">"{comment.body}"</p>
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
        }).reverse()
    }
        </div>
        </div>
    )
}

export default CommentsList


// {  for (let i = 0; i < [comment.rating].length; i++ ) {
// }
// <span class="material-icons star-icon">star</span>

// }