import { gql } from 'apollo-boost'

export default gql`
  query {
    viewer {
      name,
      avatarUrl
    }
  }
`;