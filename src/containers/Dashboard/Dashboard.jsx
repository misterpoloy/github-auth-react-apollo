import React from 'react';
import { Query } from 'react-apollo';
import GET_REPOS from '../../queries/GET_REPOS';
import RepoCard from '../../components/RepoCard/RepoCard';

export default () => (
  <Query query={ GET_REPOS } variables={{ number_of_repos: 3 }}>
    {({ loading, error, data}) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <div>
          <h1>My repositories: </h1>
          {data.viewer.repositories.nodes.map(repo => (
            <RepoCard key={repo.id} {...repo } />
          ))}
        </div>
      );
    }}
  </Query>
);
