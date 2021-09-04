import React from 'react'
import { useState, useEffect } from 'react'
import CreateComment from './CreateComment'

const CommentsList = ({ location }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
    fetch(`/comment/`)
    .then((res) => res.json())
    .then(res => setComments(res))
    .catch(err => console.log(err))
    }, []) 

    return (
        <div>
        {comments.map(comment => {
            if (location.id == comment.location_id) {
                return (
                    <div>
                        <h4>{comment.author}</h4>
                        <p>{comment.rating}/5</p>
                        <p>{comment.body}</p>
                    </div>
                )
            }
        })}
        <CreateComment key={location.id} location={location}/>
        </div>
    )
}

export default CommentsList
