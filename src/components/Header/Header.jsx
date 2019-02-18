import React, { Component } from 'react';
import { Layout, Menu , Avatar } from 'antd';
import { Query } from 'react-apollo';
// Queries
import GET_USER from '../../queries/GET_USER';
import QUERY_USER from '../../queries/QUERY_USER';

// Ant.design
const { Header } = Layout;
const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env;

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
                <div>
                  <Avatar size="large" src={avatarUrl} />
                   <span> { name }</span>
                </div>
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
                  return null;
                }}
              </Query>
            );
          }}
        </Query>
      );
    }
    // If not logged
    return (
      <a href={`https://github.com/login/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=user%20public_repo%20gist&redirect_uri=${REACT_APP_REDIRECT_URI}`}>
        Login
      </a>
    );
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
          <Menu.Item key="1">Search</Menu.Item>
          <Menu.Item key="2">Stared</Menu.Item>
          <Menu.Item style={{float: 'right'}} key="3">
            { this.renderLink() }
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default CustomHeader;
