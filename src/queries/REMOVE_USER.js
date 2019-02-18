import { gql } from 'apollo-boost'

export default gql`
  mutation removeUser {
    removeUser @client
  }
`