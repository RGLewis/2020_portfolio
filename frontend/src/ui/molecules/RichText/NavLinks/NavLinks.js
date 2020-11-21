import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  NavLink,
  HashLink,
} from '../../../atoms/NavLinkElements/NavLinkElements';
import {
  NavLinksContainer,
  StyledParagraph,
  Underline,
} from './NavLinks.styles';
import {
  UnorderedList,
  ListItem,
} from '../../../atoms/UnorderedListElements/UnorderedListElements';
import { UseResponsive } from '../../../../hooks/useResponsive';
import { Context } from '../../../../context/context';

let isDesktop;

const NavLinks = ({
  data,
  handleShowMainNav,
  handleShowExperienceNav,
  toggleMenuState,
}) => {
  // define context
  const context = useContext(Context);

  // UL
  const RichTextUnorderedList = ({ children }) => {
    const { windowWidth } = UseResponsive();

    isDesktop = windowWidth >= 992;

    return <UnorderedList orientation="vertical">{children}</UnorderedList>;
  };

  // LI
  const RichTextListItem = ({ children }) => (
    <ListItem orientation="vertical">{children}</ListItem>
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
        <RichTextListItem>
          {children}

          {/* {isActive && <Underline />} */}
        </RichTextListItem>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [INLINES.HYPERLINK]: (node, children) => {
        // define variables
        const isExact = node.data.uri === '/';
        const isExperience = node.data.uri.includes('/experience');

        const hashLink = node.data.uri.includes('/experience#');

        // define the link
        const link = children[0];

        const isActive = context.activeExperienceSection === link;

        if (hashLink) {
          return (
            <HashLink
              to={node.data.uri}
              onClick={
                isExperience ? handleShowExperienceNav : handleShowMainNav
              }
              isActive={isActive}
              toggleMenuState={toggleMenuState}
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
              toggleMenuState={toggleMenuState}
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
