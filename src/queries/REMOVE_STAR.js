import { gql } from 'apollo-boost';

export default gql`
  mutation($starrableId: ID!) {
    removeStar(input: { starrableId: $starrableId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;
