import React, { Component } from 'react';

class Notifications extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <p>You have 0 unread notifications.</p>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Notification</th>
                        <th scope="col">Date</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td>05.01.2020</td>
                        <td><i className="fa fa-trash" style={{color:"red", fontSize:20}} aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td>01.01.2020</td>
                        <td><i className="fa fa-trash" style={{color:"red", fontSize:20}} aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                        <td>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</td>
                        <td>25.12.2019</td>
                        <td><i className="fa fa-trash" style={{color:"red", fontSize:20}} aria-hidden="true"></i></td>
                        </tr>
                    </tbody>
                    </table>
            </div>

         );
    }
}
 
export default Notifications;