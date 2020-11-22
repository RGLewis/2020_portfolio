import React from 'react';
import PropTypes from 'prop-types';
import { StyledUppercase } from './Typography.styles';

const Uppercase = ({ children }) => (
  <StyledUppercase>{children}</StyledUppercase>
);

export default Uppercase;

Uppercase.propTypes = {
  children: PropTypes.node.isRequired,
};
