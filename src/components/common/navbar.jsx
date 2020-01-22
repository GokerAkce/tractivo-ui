import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <img src="/logo02.png" style={{width:45}} alt=""/>
        <Link className="navbar-brand" to="/dashboard">Tractivo</Link>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/">Goker Akce</Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-link" to="/notifications">Notifications</Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-link" to="/">Logout</Link>
            </li>
        </ul>
        </nav>
    );
}
 
export default Navbar;