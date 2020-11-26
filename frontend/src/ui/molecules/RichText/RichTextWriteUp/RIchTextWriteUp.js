import React from 'react';
import PropTypes from 'prop-types';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import HeadingFirst from '../../../atoms/Typography/HeadingFirst';
import HeadingSecond from '../../../atoms/Typography/HeadingSecond';
import HeadingThird from '../../../atoms/Typography/HeadingThird';
import HeadingFourth from '../../../atoms/Typography/HeadingFourth';
import HeadingFifth from '../../../atoms/Typography/HeadingFifth';
import Body from '../../../atoms/Typography/Body';
import RichTextWriteUpLink from '../../../atoms/RichTextWriteUpLink/RichTextWriteUpLink';
import {
  UnorderedList,
  ListItem,
} from '../../../atoms/UnorderedListElements/UnorderedListElements';

const RichTextWriteUp = ({ data, variant, isUnderlined, isLarge }) => {
  // h1
  const RichTextHeadingFirst = ({ children }) => (
    <HeadingFirst
      variant={variant}
      isUnderlined={isUnderlined}
      isPageHeading={false}
    >
      {children}
    </HeadingFirst>
  );

  // h2
  const RichTextHeadingSecond = ({ children }) => (
    <HeadingSecond>{children}</HeadingSecond>
  );

  // h3
  const RichTextHeadingThird = ({ children }) => (
    <HeadingThird variant={variant}>{children}</HeadingThird>
  );

  // h4
  const RichTextHeadingFourth = ({ children }) => (
    <HeadingFourth variant={variant}>{children}</HeadingFourth>
  );

  // h5
  const RichTextHeadingFifth = ({ children }) => (
    <HeadingFifth variant={variant}>{children}</HeadingFifth>
  );

  // p
  const RichTextBody = ({ children }) => (
    <Body variant={variant} isLarge={isLarge} marginBottom>
      {children}
    </Body>
  );

  // UL
  const RichTextUnorderedList = ({ children }) => (
    <UnorderedList orientation="vertical" hasBullets>
      {children}
    </UnorderedList>
  );

  // LI
  const RichTextListItem = ({ children }) => (
    <ListItem orientation="vertical" spaceBetween={false}>
      {children}
    </ListItem>
  );

  // render the types
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <RichTextHeadingFirst>{children}</RichTextHeadingFirst>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <RichTextHeadingSecond>{children}</RichTextHeadingSecond>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <RichTextHeadingThird>{children}</RichTextHeadingThird>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <RichTextHeadingFourth>{children}</RichTextHeadingFourth>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <RichTextHeadingFifth>{children}</RichTextHeadingFifth>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <RichTextBody>{children}</RichTextBody>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <RichTextUnorderedList>{children}</RichTextUnorderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <RichTextListItem>{children}</RichTextListItem>
      ),
      [INLINES.HYPERLINK]: (node, children, variant) => {
        return (
          <RichTextWriteUpLink href={node.data.uri} variant={variant}>
            {children}
          </RichTextWriteUpLink>
        );
      },
    },
  };

  return <>{documentToReactComponents(data, options)}</>;
};

export default RichTextWriteUp;

RichTextWriteUp.propTypes = {
  data: PropTypes.object.isRequired,
  isUnderlines: PropTypes.bool,
  variant: PropTypes.oneOf([
    'primaryFont',
    'secondaryFont',
    'contrast',
    'white',
    'accent',
  ]),
};

RichTextWriteUp.defaultProps = {
  variant: 'primaryFont',
  isUnderlined: false,
};
