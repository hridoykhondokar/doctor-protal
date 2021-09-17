import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link ms-5 mr-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 mr-5 active" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 mr-5 active" aria-current="page" href="#">Dental Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 mr-5 active text-white" aria-current="page" href="#">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 mr-5 active text-white" aria-current="page" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 mr-5 active text-white" aria-current="page" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;