import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app </h2>
    </div>
  </ApolloProvider>
);

export default App;
