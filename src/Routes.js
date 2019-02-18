import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// Routes codes
import routesCode from './constants/routes';
// Containers
import Login from './containers/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';
import Stared from './containers/Stared/Stared';
import NotFound from './components/NotFound/NotFound';
// HOC - validate if user is logged
import withAuthorization from './components/HOC/RouteProtector/RouteProtector'

class Routes extends Component {
  render() {
    return (
        <Switch>
          <Route exact path={ routesCode.PUBLIC.LOGIN } component={Login} />
          <Route exact path={ routesCode.AUTH.DASHBOARD } component={withAuthorization(Dashboard)} />
          <Route exact path={ routesCode.AUTH.STARED } component={withAuthorization(Stared)} />
          <Route component={NotFound} />
        </Switch>
    );
  }
}

export default Routes;