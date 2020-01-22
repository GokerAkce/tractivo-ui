import React from 'react';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
    return ( 
        <div class="list-group">
        <Link to="/dashboard" class="list-group-item list-group-item-action">Dashboard</Link>
        <Link to="/contracts" class="list-group-item list-group-item-action">Contracts</Link>
        <Link to="/invoices" class="list-group-item list-group-item-action">Invoices</Link>
        <Link to="/customers" class="list-group-item list-group-item-action">Customers</Link>
        <Link to="/" class="list-group-item list-group-item-action">Settings</Link>
        <Link to="/" class="list-group-item list-group-item-action">Log Out</Link>
        </div>
     );
}
 
export default LeftMenu;