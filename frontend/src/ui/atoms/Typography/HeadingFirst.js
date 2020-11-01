import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadingFirst } from './Typography.styles';

const HeadingFirst = ({ variant, children, isUnderlined }) => (
  <StyledHeadingFirst variant={variant} isUnderlined={isUnderlined}>
    {children}
  </StyledHeadingFirst>
);

HeadingFirst.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primaryFont',
    'secondaryFont',
    'contrast',
    'menuFontColor',
    'accent',
  ]),
  isUnderlined: PropTypes.bool,
};

HeadingFirst.defaultProps = {
  variant: 'primaryFont',
  isUnderlined: false,
};

export default HeadingFirst;
