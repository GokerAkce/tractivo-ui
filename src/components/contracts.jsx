import React, { Component } from 'react';

class Contracts extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <h4>Contracts</h4>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Start Date</th>
                <th scope="col">Until</th>
                <th scope="col">Price</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
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
                <td>Valid</td>
                </tr>
            </tbody>
            </table>
            <button type="button" className="btn btn-primary btn-sm float-right mr-5">New Contract</button>
            </div>


         );
    }
}
 
export default Contracts;
