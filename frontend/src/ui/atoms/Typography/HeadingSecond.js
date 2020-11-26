import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadingSecond } from './Typography.styles';

const HeadingSecond = ({ children }) => (
  <StyledHeadingSecond>{children}</StyledHeadingSecond>
);

export default HeadingSecond;

HeadingSecond.propTypes = {
  children: PropTypes.node.isRequired,
};
