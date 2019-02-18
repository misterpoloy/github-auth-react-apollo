import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// Routes codes
import routesCode from './constants/routes';
// Containers
import Login from './containers/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';
// HOC - validate if user is logged
import withAuthorization from './components/HOC/RouteProtector/RouteProtector'

class Routes extends Component {
  render() {
    return (
        <div>
          <Route exact path={ routesCode.PUBLIC.LOGIN } component={Login} />
          <Route exact path={ routesCode.AUTH.DASHBOARD } component={withAuthorization(Dashboard)} />
        </div>
    );
  }
}

export default Routes;