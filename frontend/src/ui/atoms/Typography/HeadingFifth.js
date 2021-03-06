import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadingFifth } from './Typography.styles';

const HeadingFifth = ({ children, variant }) => (
  <StyledHeadingFifth variant={variant}>{children}</StyledHeadingFifth>
);

export default HeadingFifth;

HeadingFifth.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primaryFont',
    'secondaryFont',
    'contrast',
    'white',
    'accent',
  ]),
};

HeadingFifth.defaultProps = {
  variant: 'primaryFont',
};
