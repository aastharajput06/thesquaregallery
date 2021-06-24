import React, {useState} from 'react'  //utilizing useState
import {Link} from 'react-dom'

const gallery =[
    "Animals",
    "Nature",
    "Food"
];
function   Navbar() {
   const[ search, setSearch] = useState("");

    /* The handleChange() function to set a new state for input */
   const handleChange = event => {
          setSearch(event.target.value);
   };

    return (
        <>
       <nav className="navbar">
          <div className="search">
                <input 
                    type = "text"
                    placeholder = "Search"
                    value = {search}
                    onChange = {handleChange}/>
            {/* <ul>
                <li>Animals</li>
                <li>Nature</li>
            </ul>    
               */}

               
          </div>

        
           </nav> 
       
        </>
    )
}

export default Navbar;
