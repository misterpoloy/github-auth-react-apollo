import { qql } from 'apollo-boost';

export default qql`
query($number_of_repos:Int!) {
  viewer {
    name
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
