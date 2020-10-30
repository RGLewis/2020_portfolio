import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadingThird } from './Typography.styles';

const HeadingThird = ({ children }) => (
  <StyledHeadingThird>{children}</StyledHeadingThird>
);

HeadingThird.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadingThird;
