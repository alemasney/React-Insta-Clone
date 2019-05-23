import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="icon-heading">
                <span><i className="fab fa-instagram"></i></span>
                <h3>Instagram</h3>
            </div>
            <form>
                <i className="fas fa-search"></i>
                <input type="text" name="search" placeholder="Search.."></input>
            </form>

            <div>
                <span><i className="far fa-compass"></i></span>
                <span><i className="far fa-heart"></i></span>
                <span><i className="far fa-user"></i></span>
            </div>
        </div>
    )
}

export default SearchBar;