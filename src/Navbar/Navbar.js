import React, {Component} from 'react';
import './navbar.css';
import {Link, withRouter} from 'react-router-dom';
class Navbar extends Component {
    render () {
        return (
            <ul className="navbar-nav">
            <li className="nav-item"><Link to="/register">Register Now</Link></li>
            </ul>

        )
    }
     
}

export default withRouter(Navbar);