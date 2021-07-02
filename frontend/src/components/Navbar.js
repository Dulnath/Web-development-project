import React from 'react'
import './navStyle.css';
import { useHistory } from 'react-router-dom';
const Navbar = (props) =>{
    return(
        <div className="top">
            <nav className="nav">
                <ol>
                    <li><a>Home</a></li>
                    <li><a>Courses</a></li>
                    <li><a>Calender</a></li>
                    <li><a>News</a></li>
                    <li><a>About Us</a></li>
                    <li class="animation"></li>
                </ol>
            </nav>
        </div>
    )
}

export default Navbar;