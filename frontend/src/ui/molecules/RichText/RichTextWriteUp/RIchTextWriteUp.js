import React from 'react';
import PropTypes from 'prop-types';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import HeadingFirst from '../../../atoms/Typography/HeadingFirst';
import HeadingThird from '../../../atoms/Typography/HeadingThird';
import HeadingSecond from '../../../atoms/Typography/HeadingSecond';
import Body from '../../../atoms/Typography/Body';
import RichTextWriteUpLink from '../../../atoms/RichTextWriteUpLink/RichTextWriteUpLink';

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

  // p
  const RichTextBody = ({ children }) => (
    <Body variant={variant} isLarge={isLarge} marginBottom>
      {children}
    </Body>
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
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <RichTextBody>{children}</RichTextBody>
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
    'menuFontColor',
    'accent',
  ]),
};

RichTextWriteUp.defaultProps = {
  variant: 'primaryFont',
  isUnderlined: false,
};
