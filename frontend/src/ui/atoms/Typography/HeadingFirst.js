import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadingFirst } from './Typography.styles';

export const HeadingFirst = ({
  variant,
  children,
  isUnderlined,
  isPageHeading,
}) => (
  <StyledHeadingFirst
    variant={variant}
    isUnderlined={isUnderlined}
    isPageHeading={isPageHeading}
  >
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
  isPageHeading: PropTypes.bool,
};

HeadingFirst.defaultProps = {
  variant: 'primaryFont',
  isUnderlined: false,
  isPageHeading: true,
};

export default HeadingFirst;
