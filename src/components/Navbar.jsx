import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css'; // Link to a CSS file for styling
import logo from '../assets/CUNY Connect logo.png'; 


const Navbar = () => {
    return (
        <nav className="shadow-lg sticky top-0 z-10">
           <div className="logo">
           <a href='/'><img src={logo} alt="Logo" className="navbar-logo" /></a>
           </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/food">Food</Link></li>
                <li><Link to="/housing">Housing</Link></li>
                <li><Link to="/mental-health">Mental Health</Link></li>
                <li><Link to="/safety">Safety</Link></li>
                <li><Link to="/quiz">Quiz</Link></li>
            </ul>

        </nav>
    );
}

export default Navbar;
