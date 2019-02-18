import { gql } from 'apollo-boost';

export default gql`
query($number_of_repos:Int!) {
  viewer {
     repositories(last: $number_of_repos) {
       nodes {
         name
        	id
          nameWithOwner
          url
          descriptionHTML
          viewerHasStarred
       }
     }
   }
}
`;
