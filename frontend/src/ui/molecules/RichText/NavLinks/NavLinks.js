import React from 'react';
import PropTypes from 'prop-types';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  NavLink,
  HashLink,
} from '../../../atoms/NavLinkElements/NavLinkElements';
import { NavLinksContainer, StyledParagraph } from './NavLinks.styles';
import {
  UnorderedList,
  ListItem,
} from '../../../atoms/UnorderedListElements/UnorderedListElements';
import { UseResponsive } from '../../../../hooks/useResponsive';

let isDesktop;

const NavLinks = ({
  data,
  isExperienceLink,
  handleShowMainNav,
  handleShowExperienceNav,
}) => {
  // UL
  const RichTextUnorderedList = ({ children }) => {
    const { windowWidth } = UseResponsive();

    isDesktop = windowWidth >= 992;

    return (
      <UnorderedList orientation={isDesktop ? 'vertical' : 'horizontal'}>
        {children}
      </UnorderedList>
    );
  };

  // LI
  const RichTextListItem = ({ children }) => (
    <ListItem orientation={isDesktop ? 'vertical' : 'horizontal'}>
      {children}
    </ListItem>
  );

  // PARAGRAPH
  const Paragraph = ({ children }) => (
    <StyledParagraph>{children}</StyledParagraph>
  );

  // render the types
  const options = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => (
        <RichTextUnorderedList>{children}</RichTextUnorderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <RichTextListItem>{children}</RichTextListItem>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [INLINES.HYPERLINK]: (node, children) => {
        // define variables
        const isExact = node.data.uri === '/';
        const isExperience = node.data.uri.includes('/experience');

        if (isExperienceLink) {
          return (
            <HashLink
              to={node.data.uri}
              isExact={isExact}
              onClick={
                isExperience ? handleShowExperienceNav : handleShowMainNav
              }
            >
              {children}
            </HashLink>
          );
        } else {
          return (
            <NavLink
              to={node.data.uri}
              isExact={isExact}
              onClick={
                isExperience ? handleShowExperienceNav : handleShowMainNav
              }
            >
              {children}
            </NavLink>
          );
        }
      },
    },
  };

  return (
    <NavLinksContainer>
      {documentToReactComponents(data, options)}
    </NavLinksContainer>
  );
};

export default NavLinks;
