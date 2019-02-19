import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { withRouter } from 'react-router-dom'

class Login extends Component {
    render() {
      if (localStorage.getItem("github_token")) {
        this.props.history.push('/');
      }
      return (
        <Row>
          <Col sm={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 6 }}>
          <h1 style={{ textAlign: 'center' }}>
            Welcome to Source Control <span aria-label="Star" role="img">⭐</span>
          </h1>
          <Card
            title="Star your repos!"
            extra={<a href="https://github.com/misterpoloy/github-auth-react-apollo">Source code</a>}
            style={{ width: 300, margin: 'auto' }}
          >
          Stack:
            <ul>
              <li><a href="https://github.com/facebook/create-react-app">React</a></li>
              <li><a href="https://www.apollographql.com/">Apollo</a></li>
              <li><a href="https://graphql.org/">GraphQL</a></li>
              <li><a href="https://www.apollographql.com/docs/link/links/state.html">Apollo link (instead of redux)</a></li>
              <li><a href="https://github.com/prose/gatekeeper#deploy-on-heroku">Gatekeeper</a></li>
              <li><a href="https://ant.design/">Ant.design</a></li>
              <li><a href="https://jestjs.io/index.html">Jest for testing</a></li>
              <li><a href="https://prettier.io/docs/en/eslint.html">Eslint and Prettier</a></li>
            </ul>
          Helpful documentation:
            <ul>
              <li><a href="https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql">Github API</a></li>
              <li><a href="https://www.graphql.college/implementing-github-oauth-flow/">Github Auth flow</a></li>
            </ul>
          </Card>
          </Col>
        </Row>
      );
    }
  }
export default withRouter(Login);
