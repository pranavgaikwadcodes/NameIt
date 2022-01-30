import React from "react";
import _, {debounce} from 'lodash';
import './SearchBox.css';

const SearchBox = ({ onInputChange }) => {

    return(
        <div className="search-container">
            <input
                onChange={ debounce( (event) => onInputChange(event.target.value) , 2000 ) }
                placeholder="Type a Keyword"
                className="search-input"
                autoFocus="true"
            />
        </div>
    )

}

export default SearchBox;