import React from 'react';
import { Link } from "react-router-dom";

//this component will contain the navigation will links to every page
export default function Navigation() {
    return (
        <nav id="header-navigation">
            <ul id="header-navigation-list">
                <li className='header-navigation-link'><Link to="/">Home</Link></li>
                <li className='header-navigation-link'><Link to="/products">Products</Link></li>
                <li className='header-navigation-link'><Link to="/about">About</Link></li>   
            </ul>
        </nav>

    );
}
