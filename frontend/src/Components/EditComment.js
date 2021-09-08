import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const EditComment = ({match}) => {
    const [updateComment, setUpdateComment] = useState([])

    useEffect(() => {
        axios.get(`/comment/`)
        .then(res => {setUpdateComment(res)})
        .catch(err => {console.error(err)})
    }, [])

    const updatedComment = (e) => {
        e.preventDefault()
        const editedComment = {
            body: updateComment.body,
        };
        console.log(editedComment, "test")

        axios.put(`/comment/${match.params.id}/`, editedComment)
        .then(res => {
            console.log(res)
            console.log(match.params.id)
            setUpdateComment(res)
          })
        .then(window.location=`/comment/${match.params.id}`)
    }

    const handleChange = (e) => {
        setUpdateComment({...updateComment, [e.target.id]: e.target.value})
    }

    return (
        <div>
            {updateComment ? 
            <form onSubmit={updatedComment}>
                <label htmlFor="instance"/>
                <textarea id="instance" onChange={handleChange}>{updateComment.body}</textarea>
                <div>
                    <a href="/posts/days" id="cancel-btn">Cancel</a>
                    <button type="submit">Update</button>
                </div>
            </form> : null
            }
        </div>
    )
}

export default EditComment
