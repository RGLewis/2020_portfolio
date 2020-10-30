import { gql } from '@apollo/client';

const GET_FOOTER = gql`
query footer {
  footer(id: "34f9CR5bXX708PSjwO69zH") {
    title
    copyright
    techStack
    footerItemsCollection {
      items {
        ... on LinksList {
          linksList {
            json
          }
        }
      }
    }
  }
}
`;

export default GET_FOOTER;