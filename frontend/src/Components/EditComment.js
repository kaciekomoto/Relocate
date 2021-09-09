import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom"

const EditComment = ({location, match}) => {
    const [updateComment, setUpdateComment] = useState([])
    // const [locationId, setLocationId] = useState(location)
    
    useEffect(() => {
        axios.get(`http://localhost:8000/comment/${match.params.id}`)
        .then(res => {
            setUpdateComment(res.data)
            console.log(res.data)
        })
        .catch(err => {console.error(err)})
    }, [])

    const handleChange = (e) => {
        // setUpdateComment(e.target.value)
        // console.log(e.target.value)
        // setUpdateComment({...updateComment, [e.target.id]: e.target.value})
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
            body: updateComment.body,
            location_id: updateComment.location_id
        };
        console.log(editedComment, "test")
        console.log(location)
        // console.log(match.params)

        const headers = {
            'Content-Type': 'application/json',
            //   'X-CSRFToken':csrftoken,
        }
        // const url = `http://localhost:8000/comment/`
        axios.put(`http://localhost:8000/comment/${match.params.id}`, editedComment, headers)
        .then(res => {
            console.log(res.data)
            console.log(match.params.id)
            setUpdateComment(res.data)
          })
        .then(window.location=`/location/${updateComment.location_id}`)
    }



    return (
        <div>
            {updateComment ? 
            <form onSubmit={updatedComment}>
                <h2>Edit</h2>
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
