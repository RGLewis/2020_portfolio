import React from 'react';
import PropTypes from 'prop-types';
import { StyledUppercase } from './Typography.styles';

const Uppercase = ({ children }) => (
  <StyledUppercase>{children}</StyledUppercase>
);

Uppercase.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Uppercase;
