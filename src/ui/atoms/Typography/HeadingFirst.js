import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadingFirst } from './Typography.styles';

const HeadingFirst = ({ children }) => (
  <StyledHeadingFirst>{children}</StyledHeadingFirst>
);

HeadingFirst.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadingFirst;
