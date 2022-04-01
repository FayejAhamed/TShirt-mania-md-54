import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>This is Tshirts Mania</h2>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/orderreview">Order Review</Link>
                <Link to="grandpa"> grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;