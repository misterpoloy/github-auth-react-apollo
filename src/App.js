import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import fetch from "unfetch";
import Routes from './Routes';
import './App.css';
import STATUS from './constants/status';
import { defaults, resolvers } from './constants/state';
import Content from './components/Content/Content';

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
        <Content status={status}>
          <Routes />
        </Content>
      </ApolloProvider>
    );
  }
}

export default App;

