import React from 'react'
import './navStyle.css';
import { useHistory } from 'react-router-dom';
const Navbar = (props) =>{
    return(
        <div className="top">
            <nav className="nav">
                <ol>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="entertainment.html">Entertainment</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li className="animation"></li>
                </ol>
            </nav>
        </div>
    )
}

export default Navbar;