import React, { Component } from 'react';

class Invoices extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <h4>Invoices</h4>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Invoice Date</th>
                <th scope="col">Maturity Date</th>
                <th scope="col">Price</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
                <th scope="col">Contract ID</th>
                <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark Pell</td>
                <td>12.05.2019</td>
                <td>12.05.2020</td>
                <td>£35 (Mon)</td>
                <td>B</td>
                <td>Sent</td>
                <td>1258</td>
                <td>—</td>
                </tr>
            </tbody>
            </table>
            <button type="button" className="btn btn-primary btn-sm float-right mr-5">New Invoice</button>
            </div>
         );
    }
}
 
export default Invoices;