import React from 'react'
import logo from '../images/navbar/logo.png'
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={logo} alt="logo" height="28px" width="146px" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto gap-2 gap-lg-5 mb-2 mb-lg-0 ">
                        <li className="nav-item nav-li ps-3 ps-lg-0">
                            <Link to="/home" className="nav-link  " >Home</Link>
                        </li>
                        <li className="nav-item nav-li ps-3 ps-lg-0">
                            <Link to="/test" className="nav-link " >About</Link>
                        </li>
                        <li className="nav-item nav-li ps-3 ps-lg-0">
                            <a className="nav-link " href="#">Product</a>
                        </li>
                        <li className="nav-item nav-li ps-3 ps-lg-0">
                            <a className="nav-link " href="#">Contact</a>
                        </li>
                        <li className="nav-item nav-li ps-3 ps-lg-0">
                            <a className="nav-link " href="#">Press Release</a>
                        </li>
                        <li className="nav-item nav-li ps-3 ps-lg-0">
                            <a className="nav-link " href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
    );
}

export default Navbar
