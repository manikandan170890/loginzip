import React from 'react'
import { Link } from 'react-router-dom';
export default function Landing() {
    return (
        <div className="jumbotron">
            <h1>Navbar example</h1>
            <p className="lead">
                This example is a quick exercise to illustrate how the top-aligned navbar
                works. As you scroll, this navbar remains in its original position and moves
                with the rest of the page.
            </p>
            <Link to='/login'
                className="btn btn-lg btn-success"
                
                role="button"
            >
            
               Login
            </Link>

            <Link to='/register'
                className="btn btn-lg btn-primary"
                
                role="button"
            >
            
                Sign Up
            </Link>

        </div>
    )
}
