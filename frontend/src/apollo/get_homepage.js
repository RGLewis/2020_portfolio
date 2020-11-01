import { gql } from '@apollo/client';

const GET_HOMEPAGE = gql`
query homepage {
  page(id: "5NDUJLUkiLqJOqlNFjzOrn"){
    title
    image{
      description
      url
    }
    componentsCollection {
      items {
          ... on RichTextWriteUp {            
          content {
            json
          }
        }
      }
    }
  }
}
`;

export default GET_HOMEPAGE;