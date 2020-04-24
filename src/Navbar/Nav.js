import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';


const Nav = () => {

    return (
        <header className="navbar">        
            <nav className="nav-navigation">

                <div style={{marginRight: '630px'}} className="logo"><a href="/"></a>Searchcury</div>
                <div className="space"></div>
                <div className="nav-navigation-list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                        <li><Link to="./movieApp">movieApp</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Nav;