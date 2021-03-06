import React, { Component } from 'react';
import { Button, Spin } from 'antd';
import { Query } from 'react-apollo';
import GET_REPOS from '../../queries/GET_REPOS';
import RepoCard from '../../components/RepoCard/RepoCard';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: 3
    }
  }

  render() {
    const { max } = this.state;
    return (
      <Query query={ GET_REPOS } variables={{ number_of_repos: max }}>
        {({ loading, error, data}) => {
          if (loading) return <div><Spin /> Loading repos...</div>;
          if (error) {
            return `Error! ${error.message}`
          }
          return (
            <div>
              <h1>Explore repositories: </h1>
              {data.viewer.repositories.nodes.map(repo => (
                <RepoCard max={max} key={repo.id} {...repo } />
              ))}
              <Button
                style={{ marginTop: 25 }}
                onClick={() => this.setState(prevState => ({
                  max: prevState.max + 3
                }))}
              >
                Load more
              </Button>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Dashboard;
