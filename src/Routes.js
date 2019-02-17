import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
// Routes codes
import routesCode from './constants/routes';
// Containers
import Login from './containers/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path={ routesCode.PUBLIC.LOGIN } component={Login} />
          <Route path={ routesCode.AUTH.DASHBOARD } component={Dashboard} />
        </div>
      </HashRouter>
    );
  }
}

export default Routes;