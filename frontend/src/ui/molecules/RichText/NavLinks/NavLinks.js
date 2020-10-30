import React from 'react';
import PropTypes from 'prop-types';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {NavLink, HashLink, NavLinkContainer, NavLinkListContainer} from '../../../atoms/NavLinkElements/NavLinkElements'
import {NavLinksContainer, StyledParagraph} from './NavLinks.styles'

const NavLinks = ({data, isExperienceLink, handleShowMainNav, handleShowExperienceNav}) => {
  // UL
  const UnorderedList = ({ children }) => (
    <NavLinkListContainer>{children}</NavLinkListContainer>
  );

  // LI
  const ListItem = ({ children }) => (
    <NavLinkContainer>
      {children}
    </NavLinkContainer>
  );

  // PARAGRAPH
  const Paragraph = ({children}) => (
    <StyledParagraph>
      {children}
    </StyledParagraph>
  )

  // render the types
  const options = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => (
        <UnorderedList>{children}</UnorderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [INLINES.HYPERLINK]: (node, children) =>{
        // define variables
        const isExact = node.data.uri === "/"
        const isExperience = node.data.uri.includes('/experience')

        if (isExperienceLink){
          return (
            <HashLink
              to={node.data.uri}
              isExact={isExact}
              onClick={isExperience ? handleShowExperienceNav : handleShowMainNav}
            >
              {children}
            </HashLink>
          )
        } else {
          return (
            <NavLink
              to={node.data.uri}
              isExact={isExact}
              onClick={isExperience ? handleShowExperienceNav : handleShowMainNav}
            >
              {children}
            </NavLink>
          )
        }

        
      }
    },
  };

  return <NavLinksContainer>{documentToReactComponents(data, options)}</NavLinksContainer>;
}

export default NavLinks