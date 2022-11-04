import React from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
    <nav>
        <ul>
            <li><h1><Link to="/">Umidjon's Portfolio</Link></h1></li>
            <div className='menu'>
                <li><Link to="/resume">My resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </div>
           
        </ul>
    </nav>
    {props.children}
    </>
  )
}

export default Navbar