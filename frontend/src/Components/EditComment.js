import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from 'axios'

const EditComment = ({ match }) => {
    const [updateComment, setUpdateComment] = useState([])
    // const [locationId, setLocationId] = useState(location)
    
    useEffect(() => {
        axios.get(`http://localhost:8000/comment/${match.params.id}`)
        .then(res => {
            setUpdateComment(res.data)
            // console.log(res.data)
        })
        .catch(err => {console.error(err)})
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setUpdateComment((data) => {
            return {
                ...data,
                [name] : value,
            }
        })
    }

    const updatedComment = (e) => {
        e.preventDefault()
        const editedComment = {
            author: updateComment.author,
            rating: updateComment.rating,
            body: updateComment.body,
            location_id: updateComment.location_id
        };
        console.log(editedComment, "test")
        // console.log(location)

        const headers = {'Content-Type': 'application/json',}

        axios.put(`http://localhost:8000/comment/${match.params.id}`, editedComment, headers)
        .then(res => {
            console.log(res.data)
            setUpdateComment(res.data)
          })
        .then(window.location=`/location/${updateComment.location_id}`)
    }



    return (
        <div>
        {updateComment ? 
        <form onSubmit={updatedComment}>
            <h2>Edit</h2>
            <div className="input-label-containers">
                <label htmlFor="author">Name:</label>
                <input 
                    id="author" 
                    name="author"
                    className="name-input" 
                    placeholder={updateComment.author} 
                    onChange={handleChange}
                /> 
            </div>
  
            <div className="input-label-containers">
                <label htmlFor="rating">Rating:</label>
                <input 
                    id="rating" 
                    name="rating" 
                    className="rating-input" 
                    placeholder={updatedComment.rating}
                    onChange={handleChange}
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
                    placeholder={updatedComment.body}
                    onChange={handleChange}
                    />
            </div>
                <div>
                    <Link to={`/location/${updateComment.location_id}`}>Cancel</Link>
                    <button type="submit" className="purple-btn">Update</button>
                </div>
            </form> : null
            }
        </div>
    )
}

export default EditComment
