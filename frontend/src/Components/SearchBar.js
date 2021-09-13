import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Route, Link } from 'react-router-dom'


const SearchBar = ({placeholder, locations}) => {
    const [filteredData, setFilteredData] = useState([])

    const handleFilter = (e) => {
        const searchTerm = e.target.value
        const filterArr = locations.filter((value) => {
            return (((value.name.toLowerCase().includes(searchTerm.toLowerCase()))) 
            || ((value.city.toLowerCase().includes(searchTerm.toLowerCase())))
            || ((value.state.toLowerCase().includes(searchTerm.toLowerCase())))
            )
        })
        if (searchTerm === "") {
            setFilteredData([])
        } else {
            setFilteredData(filterArr);
        }
    }
    
    return (
        <div className="search">
            <div className="search-bar">
                <label className="search-icon-container" for="search">
                    <i className="material-icons">search</i>
                </label>
                <input type="search" className="search-input search-icon" placeholder={placeholder} onChange={handleFilter}/>
            </div>
            {filteredData.length != 0 && (
            <div className="results-card">
            {filteredData.map((value, key) => {
                    return(
                        <div target="_blank">
                            <Link to={"/location/"+value.id}>
                                <div className="result-container">
                                    <p className="result-name">{value.name}</p>
                                    <p className="result-city-state">{value.city}, {value.state}</p>                     
                                </div>
                            </Link>
                        </div>
                    )
                })
                }
            </div>
            )}
        </div>
    )
}

export default SearchBar