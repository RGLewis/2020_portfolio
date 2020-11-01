import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadingSecond } from './Typography.styles';

const HeadingSecond = ({ children, variant }) => (
  <StyledHeadingSecond variant={variant}>{children}</StyledHeadingSecond>
);

HeadingSecond.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadingSecond;
