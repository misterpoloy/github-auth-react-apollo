import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { Layout, Menu , Avatar, Icon, Button, message } from 'antd';
import { Query, Mutation } from 'react-apollo';
// Queries
import GET_USER from '../../queries/GET_USER';
import QUERY_USER from '../../queries/QUERY_USER';
import REMOVE_USER from '../../queries/REMOVE_USER';

// Ant.design
const { Header } = Layout;
const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env;

const Login = () => (
  <a href={`https://github.com/login/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=user%20public_repo%20gist&redirect_uri=${REACT_APP_REDIRECT_URI}`}>
    <Icon type="login" />
      Login
  </a>
);

class CustomHeader extends Component {
  renderLink = () => {
    if (localStorage.getItem("github_token")) {
      return (
        <Query query={ GET_USER }>
          {({ data, client }) => {
            // If local user
            const { name, avatarUrl } = data.user;
            if (name) {
              return (
                <Mutation mutation={ REMOVE_USER }>
                  {(removeUser) => (
                    <div>
                      <Avatar size="large" src={avatarUrl} />
                        <span> { name } </span>
                        <Button
                          onClick={e => {
                            e.preventDefault();
                            localStorage.removeItem("github_token");
                            removeUser();
                            message.success('logged out');
                            this.props.history.push('/login');
                          }}
                          style={{ marginLeft: 10 }}
                          ghost
                        >
                          Log out
                          <Icon type="logout" />
                      </Button>
                    </div>
                  )}
                </Mutation>
              );
            }
            // If not local user, query
            return (
              <Query query={ QUERY_USER } onCompleted={(params) => {
                client.writeData({ data: { user: params.viewer} });
              }}>
                {({ loading, error }) => {
                  if (loading) return <div>loading...</div>;
                  if (error) return <div>Error</div>;
                  return <Login />;
                }}
              </Query>
            );
          }}
        </Query>
      );
    }
    // If not logged
    return <Login />;
  }

  checkifLogged = () => {
    if (!localStorage.getItem("github_token")) {
      message.warning('You need to login first');
    }
  }

  render() {
    return (
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['3']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
          <Link onClick={this.checkifLogged} to="/">Search</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link onClick={this.checkifLogged} to="/stared">Stared</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/bacon">404 page</Link>
          </Menu.Item>
          <Menu.Item style={{float: 'right'}} key="4">
            { this.renderLink() }
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default withRouter(CustomHeader);
