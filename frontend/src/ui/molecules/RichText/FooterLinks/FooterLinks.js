import React from 'react';
import PropTypes from 'prop-types';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Body from '../../../atoms/Typography/Body';
import RichTextFooterLink from '../../../atoms/RichTexFooterLink/RichTextFooterLink';
import {
  UnorderedList,
  ListItem,
} from '../../../atoms/UnorderedListElements/UnorderedListElements';
import { StyledSlash, FooterLinksContainer } from './FooterLinks.styles';

const FooterLinks = ({ data }) => {
  // UL
  const RichTextUnorderedList = ({ children }) => (
    <UnorderedList orientation="horizontal">{children}</UnorderedList>
  );

  // LI
  const RichTextListItem = ({ children }) => (
    <ListItem orientation="horizontal" spaceBetween={false}>
      {children}
    </ListItem>
  );

  // P
  const Paragraph = ({ children }) => (
    <Body variant="menuFontColor">{children}</Body>
  );

  // render the types
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <StyledSlash>{text}</StyledSlash>,
    },
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => (
        <RichTextUnorderedList>{children}</RichTextUnorderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <RichTextListItem>{children}</RichTextListItem>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <RichTextFooterLink href={node.data.uri}>
            {children}
          </RichTextFooterLink>
        );
      },
    },
  };

  return (
    <FooterLinksContainer>
      {documentToReactComponents(data, options)}
    </FooterLinksContainer>
  );
};

export default FooterLinks;
