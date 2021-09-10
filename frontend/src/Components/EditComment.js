import React from 'react'
import { useState, useEffect } from 'react'
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
                <label htmlFor="author">Name</label>
                <input 
                    id="author" 
                    name="author" 
                    placeholder={updateComment.author} 
                    onChange={handleChange}
                    required
                /> 
                <br></br>
                <label htmlFor="rating">Rating</label>
                <input 
                    id="rating" 
                    name="rating" 
                    placeholder={updateComment.rating} 
                    onChange={handleChange}
                    required
                />
                <br></br>
                <label htmlFor="body"/>
                <input 
                    id="body" 
                    name="body" 
                    placeholder={updateComment.body} 
                    onChange={handleChange}
                />
                <div>
                    <a href="#" id="cancel-btn">Cancel</a>
                    <button type="submit">Update</button>
                </div>
            </form> : null
            }
        </div>
    )
}

export default EditComment
