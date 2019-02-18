import { gql } from 'apollo-boost'

export default gql`
  mutation setUser($name: String!, $avatarUrl: String!) {
    toggleTodo(name: $name, avatarUrl: $avatarUrl) @client
  }
`;