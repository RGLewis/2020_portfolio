import React from 'react';
import PropTypes from 'prop-types';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Body from '../../../atoms/Typography/Body';
import RichTextLink from '../../../atoms/RichTextLink/RichTextLink'

const FooterLinks = ({data}) => {
  // UL
  const UnorderedList = ({ children }) => (
    <ul>{children}</ul>
  );

  // LI
  const ListItem = ({ children }) => (
    <li>
      {children}
      <Body variant="menuFontColor" >/</Body>
    </li>
  );

  // P
  const Paragraph = ({children}) => (
    <Body variant="menuFontColor">{children}</Body>
  )

  // render the types
  const options = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => (
        <UnorderedList>{children}</UnorderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => 

      <ListItem>      {console.log(node)}{children}</ListItem>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [INLINES.HYPERLINK]: (node, children) =>{
        return (
          <RichTextLink href={node.data.uri} variant="menuFontColor">{children}</RichTextLink>
        )
      }
    },
  };

  return <>{documentToReactComponents(data, options)}</>;
}

export default FooterLinks