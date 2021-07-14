import React from 'react'



const SearchBar = () => (
    <form action="/" method="get">
        {/* <label htmlFor="header-search"> */}
            <span className="visually-hidden"></span>
        {/* </label> */}
        <input
            type="text"
            id="header-search"
            placeholder="Search Pictures"
            name="search" 
        />
        <ul>
            <li><a href="#">Animals</a></li>
            <li><a href="#">Food</a></li>

            <li><a href="#">Nature</a></li>
            <li><a href="#">Scenery</a></li>

            <li><a href="#">Aesthetic</a></li>
            <li><a href="#">Cats</a></li>
            <li><a href="#">Dogs</a></li>

        </ul>
      

    </form>
);

export default SearchBar;

