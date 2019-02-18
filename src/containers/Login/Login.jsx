import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Login extends Component {
    render() {
      if (localStorage.getItem("github_token")) {
        this.props.history.push('/');
      }
      return (
        <div>login container</div>
      );
    }
  }
export default withRouter(Login);
