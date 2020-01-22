import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    state = {  }
    render() { 
        return (
            <div className="row">
            <div className="card mr-3" style={{width: "18rem"}}>
            <img className="card-img-top" src="https://i.picsum.photos/id/575/286/180.jpg" alt=""/>
            <div className="card-body" style={{height:110}}>
                <h5 className="card-title">Contracts</h5>
                <p className="card-text">You have 84 active contracts today.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Valid: 84</li>
                <li className="list-group-item">Waiting: 5</li>
                <li className="list-group-item">Declined: 15</li>
            </ul>
            <div className="card-body">
                <Link to="/contracts" className="card-link">Go to contracts for more</Link>
            </div>
            </div>    

            <div className="card mr-3" style={{width: "18rem"}}>
            <img className="card-img-top" src="https://i.picsum.photos/id/74/286/180.jpg" alt="" />
            <div className="card-body" style={{height:110}}>
                <h5 className="card-title">Invoices</h5>
                <p className="card-text">20 invoices — total £950 — have been paid today.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Paid: 20</li>
                <li className="list-group-item">Valid: 135</li>
                <li className="list-group-item">Waiting: 5</li>
            </ul>
            <div className="card-body">
                <Link to="/invoices" className="card-link">Go to invoices for more</Link>
            </div>
            </div>    
            <div className="card mr-3" style={{width: "18rem"}}>
            <img className="card-img-top" src="https://i.picsum.photos/id/238/286/180.jpg" alt="" />
            <div className="card-body" style={{height:110}}>
                <h5 className="card-title">Customers</h5>
                <p className="card-text">You have 132 active customers.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">With contract: 98</li>
                <li className="list-group-item">Without contract: 34</li>
                <li className="list-group-item">This week: 3 new customers</li>
            </ul>
            <div className="card-body">
                <Link to="/invoices" className="card-link">Go to customers for more</Link>
            </div>
            </div>         
            </div>
          );
    }
}
 
export default Dashboard;