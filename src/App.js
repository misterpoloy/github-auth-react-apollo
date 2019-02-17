import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import fetch from "unfetch";
import './App.css';
import STATUS from './constants/status';

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
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

const CLIENT_ID = "2c9b20125ef911d728ff";
const REDIRECT_URI = "http://localhost:3000/";
const AUTH_API_URI = "https://gatekeeper-github-jp.herokuapp.com/authenticate/";

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
      fetch(`${AUTH_API_URI}${code}`)
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
       <a
        style={{ display: status === STATUS.INITIAL ? "inline" : "none" }}
        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user%20public_repo%20gist&redirect_uri=${REDIRECT_URI}`}
       >
        Login
       </a>
      </ApolloProvider>
    );
  }
}

export default App;

