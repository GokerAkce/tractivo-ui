import React, { Component } from 'react';

class Customers extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <h4>Customers</h4>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Contract ID</th>
                <th scope="col">Last Invoice ID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mark</td>
                <td>Pell</td>
                <td>1</td>
                <td>mpell@mdirection.com</td>
                <td>07865555555</td>
                <td>35 Portborough Avenue</td>
                <td>London</td>
                <td>1</td>
                <td>1</td>
                </tr>
            </tbody>
            </table>
            <button type="button" className="btn btn-primary btn-sm float-right mr-5">New Customer</button>
            </div>
         );
    }
}
 
export default Customers;