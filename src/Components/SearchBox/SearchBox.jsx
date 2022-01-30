import React from "react";
import './SearchBox.css';

const SearchBox = ({ onInputChange }) => {

    return(
        <div className="search-container">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Type a Keyword"
                className="search-input"
                autoFocus="true"
            />
        </div>
    )

}

export default SearchBox;