import { gql } from 'apollo-boost'

export default gql`
  {
    user @client {
      name,
      avatarUrl
    }
  }
`