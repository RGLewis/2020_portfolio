import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadingFourth } from './Typography.styles';

const HeadingFourth = ({ children, variant }) => (
  <StyledHeadingFourth variant={variant}>{children}</StyledHeadingFourth>
);

HeadingFourth.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primaryFont',
    'secondaryFont',
    'contrast',
    'menuFontColor',
    'accent',
  ]),
};

HeadingFourth.defaultProps = {
  variant: 'primaryFont',
};

export default HeadingFourth;
