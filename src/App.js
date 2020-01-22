import React from 'react';
import './App.css';
import Navbar from './components/common/navbar';
import LeftMenu from './components/common/left-menu';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Contracts from './components/contracts';
import Invoices from './components/invoices';
import Customers from './components/customers';
import Notifications from './components/notifications';

function App() {
  return (
    <React.Fragment>
    <Navbar />
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-2" style={{minWidth:130}}>
          <LeftMenu />
        </div>
        <Switch>
          <div className="col-10">
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/contracts" component={Contracts} />
            <Route path="/invoices" component={Invoices} />
            <Route path="/customers" component={Customers} />
            <Route path="/notifications" component={Notifications} />
            <Redirect from="/" to="/dashboard" />
          </div>
        </Switch>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
