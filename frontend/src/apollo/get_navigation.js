import { gql } from '@apollo/client';

const GET_NAVIGATION = gql`
query navigation {
  navigation(id: "71VyQ8habry1ZazFgTjl5c") {
    title
    headline
    subheading
    ctAsCollection {
      items {
        ... on Cta {
          sys{
            id
          }
          title
          hasIcon
          iconLeads
          prompt
        }
      }
    }
    navigationItemsCollection {
      items {
        ... on LinksList {
          sys{
            id
          }
          title
          linksList {
            json
          }
        }
      }
    }
  }
}
`;

export default GET_NAVIGATION;