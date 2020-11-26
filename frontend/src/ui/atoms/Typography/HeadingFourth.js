import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadingFourth } from './Typography.styles';

const HeadingFourth = ({ children, variant }) => (
  <StyledHeadingFourth variant={variant}>{children}</StyledHeadingFourth>
);

export default HeadingFourth;

HeadingFourth.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primaryFont',
    'secondaryFont',
    'contrast',
    'white',
    'accent',
  ]),
};

HeadingFourth.defaultProps = {
  variant: 'primaryFont',
};
