import React from 'react';
import PropTypes from 'prop-types';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import HeadingFirst from '../../../atoms/Typography/HeadingFirst';
import HeadingThird from '../../../atoms/Typography/HeadingThird';

const RichTextWriteUp = ({ data, variant, isUnderlined }) => {
  // h1
  const RichTextHeadingFirst = ({ children }) => (
    <HeadingFirst variant={variant} isUnderlined={isUnderlined}>
      {children}
    </HeadingFirst>
  );

  // h3
  const RichTextHeadingThird = ({ children }) => (
    <HeadingThird variant={variant}>{children}</HeadingThird>
  );

  // render the types
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <RichTextHeadingFirst>{children}</RichTextHeadingFirst>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <RichTextHeadingThird>{children}</RichTextHeadingThird>
      ),
    },
  };

  return <>{documentToReactComponents(data, options)}</>;
};

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

export default RichTextWriteUp;
