import React, { useState } from 'react'
import logo from '../images/navbar/logo.png'
import { Link } from 'gatsby';

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg screenSize">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={logo} alt="logo" height="28px" width="146px" /></a>
                <button className="navbar-toggler bars" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto gap-2 gap-lg-5 mb-2 mb-lg-0 mt-2 mt-lg-0">
                        <li className="nav-item nav-li ps-3 ps-lg-0">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item nav-li ps-3 ps-lg-0">
                            <Link to='/about' className="nav-link" >About</Link>
                        </li>
                        <li className="nav-item nav-li ps-3 ps-lg-0">
                            <Link to='/' className="nav-link">Product</Link>
                        </li>
                        <li className="nav-item nav-li ps-3 ps-lg-0">
                            <Link to ='/' className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item nav-li ps-3 ps-lg-0">
                            <Link to='/' className="nav-link">Press Release</Link>
                        </li>
                        <li className="nav-item nav-li ps-3 ps-lg-0">
                            <Link to='/' className="nav-link">FAQ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar