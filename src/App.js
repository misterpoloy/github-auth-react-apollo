import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HashRouter } from 'react-router-dom';
import { message } from 'antd';

import fetch from "unfetch";
import Routes from './Routes';
import STATUS from './constants/status';
import { defaults, resolvers } from './constants/state';
import Layout from './components/Layout/Layout';

const {
  REACT_APP_AUTH_API_URI,
  REACT_APP_GRAPGQL_URI
} = process.env;

export const client = new ApolloClient({
  uri: REACT_APP_GRAPGQL_URI,
  clientState: {
    defaults,
    resolvers,
  },
  request: operation => {
    const token = localStorage.getItem("github_token");
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`
        }
      });
    }
  }
});

class App extends Component {
  state = {
    status: STATUS.INITIAL
  };

  componentDidMount() {
    const storedToken = localStorage.getItem("github_token");
    if (storedToken) {
      this.setState({
        status: STATUS.AUTHENTICATED
      });
      return;
    }
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    if (code) {
      this.setState({ status: STATUS.LOADING });
      fetch(`${REACT_APP_AUTH_API_URI}${code}`)
        .then(response => response.json())
        .then(({ token }) => {
          if (token) {
            localStorage.setItem("github_token", token);
          }
          message.success('Welcome back');
          this.setState({
            status: STATUS.FINISHED_LOADING
          });
        });
    }
  }

  render() {
    const { status } = this.state;
    return (
      <ApolloProvider client={client}>
        <HashRouter>
          <Layout status={status}>
            <Routes />
          </Layout>
        </HashRouter>
      </ApolloProvider>
    );
  }
}

export default App;

