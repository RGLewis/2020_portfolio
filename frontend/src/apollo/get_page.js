import { gql } from '@apollo/client';

const GET_PAGE = gql`
  query getPage($id: String!) {
    page(id: $id) {
      title
      image {
        description
        url
      }
      componentsCollection {
        items {
          ... on RichTextWriteUp {
            title
            content {
              json
            }
          }
          ... on ContactForm {
            title
            submitPrompt
            inputsCollection {
              items {
                ... on ContactFormInput {
                  title
                  id
                  elementType
                  type
                  label
                  errorMessage
                  regex
                  label
                }
              }
            }
          }
          ... on WorkAccordion {
            title
            accordionItemsCollection {
              items {
                ... on WorkAccordionItem {
                  sys {
                    id
                  }
                  jobTitle
                  workplace
                  accordionContent {
                    json
                  }
                }
              }
            }
          }
          ... on Skills {
            title
            skillsItemCollection {
              items {
                ... on SkillsItem {
                  title
                  level
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_PAGE;
