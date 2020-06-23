import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
           <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <Link to='/' className="navbar-brand col-sm-3 col-md-2 mr-0">
                Dashboard
            </Link>
            <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
                <Link to='/register' className="nav-link" >
                   Register
                </Link>
                </li>
                </ul>
            <ul className="navbar-nav px-3">
               
                <li className="nav-item text-nowrap">
                <Link to='/login' className="nav-link" >
                    Login
                </Link>
                </li>
            </ul>
            </nav>;
 
        </div>
    )
}
